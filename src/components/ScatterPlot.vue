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

    // 降低图的大小
    var svgWidth = 400, svgHeight = 400;

    // 使用d3.js创建散点图
    var svg = d3.select("#age-scatterplot")
      .append("svg")
      .attr("width", 500)
      .attr("height", 500);

    var radius = 5;

    var xScale = d3.scaleLinear()
      .domain([d3.min(data, d => d.age), d3.max(data, d => d.age)])
      .range([radius, svgWidth - radius]);  // 考虑到点的半径

    var yScale = d3.scaleLinear()
      .domain([d3.min(data, d => d.value), d3.max(data, d => d.value)])
      .range([svgHeight - radius, radius]);  // 考虑到点的半径


    svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(d.age))
      .attr("cy", d => yScale(d.value))
      .attr("r", 5)
      .style("fill", "#69b3a2");

    // 添加x轴和y轴的标签
    svg.append("text")
      .attr("x", svgWidth / 2)
      .attr("y", svgHeight + 40)
      .attr("text-anchor", "middle")
      .text("Age");

    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 10)  // 将标签向右移动，使其在SVG的边界内
      .attr("x", -svgHeight / 2)
      .attr("dy", "1em")  // 使用"dy"属性向下移动标签
      .style("text-anchor", "middle")
      .text("Count");

    // 创建X轴和Y轴的轴生成器
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    // 添加X轴到SVG
    svg.append("g")
        .attr("transform", `translate(0,${svgHeight - radius})`) // 移动X轴到正确的位置
        .call(xAxis);

    // 添加Y轴到SVG
    svg.append("g")
        .attr("transform", `translate(${radius},0)`) // 移动Y轴到正确的位置
        .call(yAxis);
  },
  }
  </script>
