<template>
    <div class="chart-container">
      <div class="controls">
        <select v-model="sentiment">
          <option value="total">Total</option>
          <option value="positive">Positive</option>
          <option value="negative">Negative</option>
          <option value="neutral">Neutral</option>
        </select>

        <select v-model="dataFetch">
          <option value="mastodon">Mastodon</option>
          <option value="twitter">Twitter</option>
        </select>

        <button @click="generateChart">Generate</button>
      </div>

      <div id="bar-chart"></div>

    </div>
  </template>
    
  <script>
  import { ref, onMounted } from 'vue'
  import * as d3 from 'd3'
  
  import { getTwitterEmoji, getTwitterPositive, getTwitterNegative, 
           getTwitterNeutral, getMastodonEmoji, getMastodonPositive,
           getMastodonNegative, getMastodonNeutral } from '@/api/api'
  
  export default {
    name: "BarChart",
    setup() {
      const sentiment = ref('total')
      const dataFetch = ref('mastodon')
  
      const fetchData = async () => {
        switch (sentiment.value) {
          case 'total':
            return dataFetch.value === 'twitter' ? await getTwitterEmoji() : await getMastodonEmoji();
          case 'positive':
            return dataFetch.value === 'twitter' ? await getTwitterPositive() : await getMastodonPositive();
          case 'negative':
            return dataFetch.value === 'twitter' ? await getTwitterNegative() : await getMastodonNegative();
          case 'neutral':
            return dataFetch.value === 'twitter' ? await getTwitterNeutral() : await getMastodonNeutral();
        }
      }
  
      const generateChart = async () => {
        
        const data = await fetchData();

        d3.select('#bar-chart').selectAll('*').remove()

        
        const margin = { top: 20, right: 30, bottom: 40, left: 60 }

        const width = 700 - margin.left - margin.right;

        const height = 500 - margin.top - margin.bottom;
        
        const svg = d3.select('#bar-chart').append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        const x = d3.scaleBand().domain(data.map(d => d.emoji)).range([0, width]).padding(0.2);

        const y = d3.scaleLinear().domain([0, d3.max(data, d => d.count)]).range([height, 0]);

        const xAxis = d3.axisBottom(x);

        const yAxis = d3.axisLeft(y);

        svg.append('g').attr('transform', `translate(0, ${height})`).call(xAxis);

        svg.append('g').call(yAxis);

        svg.selectAll('rect').data(data).enter()
            .append('rect')
            .attr('x', d => x(d.emoji))
            .attr('y', d => y(d.count))
            .attr('width', x.bandwidth())
            .attr('height', d => height - y(d.count))
            .attr('fill', '#ffc70b');

        svg.selectAll('.text').data(data).enter()
            .append('text')
            .attr('class', 'text')
            .attr('x', (d) => x(d.emoji) + x.bandwidth() / 2)
            .attr('y', (d) => y(d.count) - 10)
            .attr('text-anchor', 'middle')
            .text((d) => d.count);

        svg.append('text')
            .attr('transform', 'translate(' + (width / 2) + ' ,' + (height + margin.bottom - 10) + ')')
            .style('text-anchor', 'middle')
            .text('Emoji');

        svg.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 0 - margin.left)
            .attr('x', 0 - height / 2)
            .attr('dy', '1em')
            .style('text-anchor', 'middle')
            .text('Count');
      }
      onMounted(generateChart);
  
      return {
        sentiment,
        dataFetch,
        generateChart,
      }
    }
  }
  </script>
  
<style scoped>
  .chart-container {
    flex-direction: column;
    align-items: center;
    display: flex;
  }
  
  .controls {
    background-color: #f8f9fa;
    border: 1px solid #ced4da;
    justify-content: center;
    display: flex;
    border-radius: 0.25rem;
    margin-bottom: 20px;
    padding: 10px;
  }
  
  .controls select {
    margin: 0 10px;
  }
  
  .controls button {
    background-color: #ffa000;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0 10px;
  }
  
  .controls button:hover {
    background-color: #ffa000;
    cursor: pointer;
  }
</style>
