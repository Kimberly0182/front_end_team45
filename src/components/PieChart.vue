<template>
    <div id="pie-chart"></div>
  </template>
  
  <script>
  import { onMounted } from 'vue'
  import * as d3 from 'd3'
  
  export default {
    name: 'PieChart',
    setup() {
      onMounted(() => {
        const data = [
          { name: 'A', value: 10 },
          { name: 'B', value: 20 },
          { name: 'C', value: 30 },
        ]
  
        const width = 300
        const height = 300
        const radius = Math.min(width, height) / 2
        const arc = d3
          .arc()
          .innerRadius(0)
          .outerRadius(radius)
        const color = d3.scaleOrdinal(d3.schemeCategory10)
        const pie = d3.pie().value(d => d.value)
  
        const svg = d3
          .select('#pie-chart')
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .append('g')
          .attr('transform', `translate(${width / 2}, ${height / 2})`)
        
        const g = svg
          .selectAll('.arc')
          .data(pie(data))
          .enter()
          .append('g')
          .attr('class', 'arc')
  
        g.append('path')
          .attr('d', arc)
          .style('fill', d => color(d.data.name))
  
        
        g.append('text')
          .attr('transform', d => `translate(${arc.centroid(d)})`)
          .attr('dy', '.35em')
          .text(d => `${d.data.name}: ${d.data.value}`)
      })
    },
  }
  </script>
  
  