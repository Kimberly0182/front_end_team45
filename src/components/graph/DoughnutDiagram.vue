<template>
    <div class="container-doughnut">
      <div>
        <select v-model="DoughnutDiagram">
          <option value="mastodon">Mastodon</option>
          <option value="twitter">Twitter</option>
        </select>
    </div>

    <svg id="donut" width="480" height="480"></svg>
      
    <div id="legend"></div>
  </div>
</template>
  
<script>
  import { ref, watch, onMounted } from 'vue'
  import * as d3 from 'd3'

  import { getMastodonSentiment, getTwitterSentiment } from '@/api/api'
  
  export default {
    name: 'DoughnutDiagram',
    setup() {
      const mastodonSentimentData = ref([])
      const twitterSentimentData = ref([])

      const DoughnutDiagram = ref('mastodon')

      onMounted(async () => {
        mastodonSentimentData.value = await getMastodonSentiment()
        twitterSentimentData.value = await getTwitterSentiment()
      })
  
      const generateDonutChart = () => {
        const data = DoughnutDiagram.value === 'mastodon'
          ? mastodonSentimentData.value
          : twitterSentimentData.value
  
        const total = Object.values(data).reduce((a, b) => a + b, 0)

        const yellowScale = ['#ffd59b', '#ffa474', '#f47461']

        const color = d3.scaleOrdinal(yellowScale)

        const pie = d3.pie().value(d => d[1])

        const arc = d3.arc().innerRadius(130).outerRadius(200)
  
        d3.select('#donut').selectAll('*').remove()
  
        const svg = d3.select('#donut')
          .append('g')
          .attr('transform', 'translate(250,250)')
  
        const g = svg.selectAll('.arc')
          .data(pie(Object.entries(data)))
          .enter().append('g')
          .attr('class', 'arc')
  
        g.append('path')
          .attr('fill', d => color(d.data[0]))
          .attr('d', arc)

        d3.select('#legend').selectAll('*').remove()
  
        const legend = d3.select('#legend')
          .append('ul')
          .attr('class', 'list-group')
  
        const items = legend.selectAll('li')
          .data(pie(Object.entries(data)))
          .enter()
          .append('li')
          .attr('class', 'list-group-item d-flex justify-content-between align-items-center')
        
        items.append('span')
          .text(d => `${d.data[0]}: ${(d.data[1] / total * 100).toFixed(2)}%`)  
  
        items.append('span')
          .style('background-color', d => color(d.data[0]))
          .style('display', 'inline-block')
          .style('width', '20px')
          .style('height', '20px')
  
      }

      watch([mastodonSentimentData, twitterSentimentData, DoughnutDiagram], generateDonutChart, { immediate: true })
  
      return {
        DoughnutDiagram,
      }
    },
  }
</script>

  
<style>
  .container-doughnut {
    flex-direction: column;
    align-items: center;
    display: flex;
  }

  #legend li {
    margin-bottom: 15px;
  }

  #legend ul {
    list-style: none;
  }
</style>