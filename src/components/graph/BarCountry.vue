<template>
    <div id="bar-country"></div>
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

    data.sort((a, b) => b.correlation_coefficient - a.correlation_coefficient);
    
    const svgWidth = 900, svgHeight = 500;

    const margin = { top: 30, right: 20, bottom: 100, left: 50};

    const width = svgWidth - margin.left - margin.right;

    const height = svgHeight - margin.top - margin.bottom;

    const svg = d3.select("#bar-country")
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight);

    const g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = d3.scaleBand()
      .rangeRound([0, width])
      .padding(0.1)
      .domain(data.map(d => d.ancestry));

    const y = d3.scaleLinear()
      .rangeRound([height, 0])
      .domain([d3.min(data, d => d.correlation_coefficient), d3.max(data, d => d.correlation_coefficient)]);

    g.append("g")
      .call(d3.axisLeft(y));
      
    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")  
      .style("text-anchor", "end")
      .attr("transform", "rotate(-65)")
      .attr("dx", "-.1em")
      .attr("dy", ".15em");
      
    g.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", d => d.correlation_coefficient < 0 ? "bar negative" : "bar positive")
      .attr("x", d => x(d.ancestry))
      .attr("y", d => y(Math.max(0, d.correlation_coefficient)))
      .attr("height", d => Math.abs(y(d.correlation_coefficient) - y(0)))
      .attr("width", x.bandwidth())
      .style("fill", "#ffc200"); 

    svg.append("text")
      .attr("x", (svgWidth / 2))             
      .attr("y", (margin.top / 2))
      .attr("text-anchor", "middle")  
      .style("font-size", "14px") 
      .style("text-decoration", "underline")  
      .text("Correlation Coefficient vs Ancestry");
  }
};
</script>