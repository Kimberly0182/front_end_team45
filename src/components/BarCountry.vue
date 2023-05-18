<template>
    <div id="bar-chart"></div>
  </template>
  
<script>
import * as d3 from 'd3';
import { getTwitterAncestryData } from '@/api/api'; // Assuming you have a new API endpoint for this data

export default {
  name: "BarChart",
  async mounted() {
    const response = await getTwitterAncestryData();
    const data = response.map(item => {
      const splitAncestry = item.ancestry.split('_');
      const ancestry = splitAncestry.slice(0, -2).join(' ');
      return {
        ...item,
        ancestry,
      };
    });

    // sort data by correlation_coefficient in descending order
    data.sort((a, b) => b.correlation_coefficient - a.correlation_coefficient);
    
    const svgWidth = 1000, svgHeight = 400;
    const margin = { top: 20, right: 20, bottom: 100, left: 50 };
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    const svg = d3.select("#bar-chart")
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight);

    const g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = d3.scaleBand()
      .rangeRound([0, width])
      .padding(0.1)
      .domain(data.map(d => d.ancestry));

    const y = d3.scaleLinear()
      .rangeRound([height, 0])
      .domain([d3.min(data, d => d.correlation_coefficient), d3.max(data, d => d.correlation_coefficient)]);

    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")  
      .style("text-anchor", "end")
      .attr("dx", "-.1em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-65)");

    g.append("g")
      .call(d3.axisLeft(y));

    g.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", d => d.correlation_coefficient < 0 ? "bar negative" : "bar positive")
      .attr("x", d => x(d.ancestry))
      .attr("y", d => y(Math.max(0, d.correlation_coefficient)))
      .attr("width", x.bandwidth())
      .attr("height", d => Math.abs(y(d.correlation_coefficient) - y(0)))
      .style("fill", "#ffc107"); 
  }
};

</script>