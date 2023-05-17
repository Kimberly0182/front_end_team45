<template>
    <div id="bar-chart"></div>
  </template>
  
  <script>
  import * as d3 from 'd3';
  
  export default {
    name: "BarChart",
    mounted() {
      const data = Array.from({length: 29}, () => Math.floor(Math.random() * 50) - 25);
  
      const svgWidth = 800, svgHeight = 400;
      const margin = { top: 20, right: 20, bottom: 30, left: 50 };
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
        .domain(data.map((d, i) => i));
  
      const y = d3.scaleLinear()
        .rangeRound([height, 0])
        .domain([d3.min(data), d3.max(data)]);
  
      g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
  
      g.append("g")
        .call(d3.axisLeft(y));
  
      g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", d => d < 0 ? "bar negative" : "bar positive")
        .attr("x", (d, i) => x(i))
        .attr("y", d => y(Math.max(0, d)))
        .attr("width", x.bandwidth())
        .attr("height", d => Math.abs(y(d) - y(0)));
    }
  };
  </script>