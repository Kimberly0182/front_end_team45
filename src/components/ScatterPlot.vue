<template>
    <div id="age-scatterplot"></div>
  </template>
  
  <script>
  import * as d3 from 'd3';
  
  export default {
    name: "ScatterPlot",
    mounted() {
    var data = [
      { age: 20, value: 5 },
      { age: 25, value: 15 },
      { age: 30, value: 20 },
      { age: 35, value: 27 },
      { age: 40, value: 30 },
      { age: 45, value: 35 },
    ];

    var svgWidth = 400, svgHeight = 400;

    var svg = d3.select("#age-scatterplot")
      .append("svg")
      .attr("width", 500)
      .attr("height", 500);

    var radius = 5;

    var xScale = d3.scaleLinear()
      .domain([d3.min(data, d => d.age), d3.max(data, d => d.age)])
      .range([radius, svgWidth - radius]);

    var yScale = d3.scaleLinear()
      .domain([d3.min(data, d => d.value), d3.max(data, d => d.value)])
      .range([svgHeight - radius, radius]);


    svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(d.age))
      .attr("cy", d => yScale(d.value))
      .attr("r", 5)
      .style("fill", "#69b3a2");

    
    svg.append("text")
      .attr("x", svgWidth / 2)
      .attr("y", svgHeight + 40)
      .attr("text-anchor", "middle")
      .text("Age");

    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 10)
      .attr("x", -svgHeight / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Count");

    
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    svg.append("g")
        .attr("transform", `translate(0,${svgHeight - radius})`)
        .call(xAxis);

    
    svg.append("g")
        .attr("transform", `translate(${radius},0)`)
        .call(yAxis);
  },
  }
  </script>
