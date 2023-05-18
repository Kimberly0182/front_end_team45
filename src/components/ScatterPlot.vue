<template>
  <div id="age-scatterplot"></div>
</template>
  
   .append("svg")
        .attr("width", 500)
        .attr("height", 500);
<script>
import * as d3 from 'd3';
import { getTwitterGeoData } from '@/api/api';

export default {
  name: "ScatterPlot",
  async mounted() {
    const rawData = await getTwitterGeoData();

    if (rawData) {
      var allData = Object.values(rawData).map(item => {
        return { age: item.age, value: item.percentage };
      });

      // remove outliers
      var data = allData.slice(0, -5);

      var svgWidth = 500, svgHeight = 500;

      var margin = {top: 20, right: 20, bottom: 60, left: 50};

      var width = svgWidth - margin.left - margin.right;

      var height = svgHeight - margin.top - margin.bottom;

      var svg = d3.select("#age-scatterplot")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


      var xScale = d3.scaleLinear()
        .domain([d3.min(data, d => d.age)-1, d3.max(data, d => d.age)])
        .range([0, width]);

      var yScale = d3.scaleLinear()
        .domain([d3.min(data, d => d.value)-0.01, d3.max(data, d => d.value)])
        .range([height, 0]);

      
      var line = d3.line()
        .x(d => xScale(d.age))
        .y(d => yScale(d.value));

      var lineData = data.map(item => {
        return {
          age: item.age,
          value: 0.4671 - 0.0051 * item.age
        };
      });

      svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xScale(d.age))
        .attr("cy", d => yScale(d.value))
        .attr("r", 5)
        .style("fill", "#69b3a2");

        
      svg.append("path")
        .datum(lineData)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("d", line);


        var xAxis = d3.axisBottom(xScale);
        var yAxis = d3.axisLeft(yScale);

        svg.append("g")
          .attr("transform", `translate(0,${height})`)
          .call(xAxis);


        svg.append("g")
          .call(yAxis);

        // Add the text label for the x axis
        svg.append("text")
          .attr("transform", `translate(${width / 2}, ${height + margin.bottom / 2})`)
          .style("text-anchor", "middle")
          .text("Age");

        // Add the text label for the Y axis
        svg.append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", -margin.left)
          .attr("x", -height / 2)
          .attr("dy", "1em")
          .style("text-anchor", "middle")
          .text("Percentage");
    }
  },
}
</script>
