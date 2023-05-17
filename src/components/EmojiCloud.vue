<template>
    <div id="word-cloud"></div>
    <div>
      <select v-model="sentiment">
        <option value="total">Total</option>
        <option value="positive">Positive</option>
        <option value="negative">Negative</option>
        <option value="neutral">Neutral</option>
      </select>
      <select v-model="dataSource">
        <option value="mastodon">Mastodon</option>
        <option value="twitter">Twitter</option>
      </select>
      <button @click="generateCloud">Generate</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import * as d3 from 'd3'
  import cloud from 'd3-cloud'
  
  export default {
    name: "EmojiCloud",
    setup() {
      const sentiment = ref('total')
      const dataSource = ref('mastodon')

      const generateCloud = () => {
        const data = [
          { text: '😀', size: 60 },
          { text: '🥰', size: 50 },
          { text: '🥳', size: 40 },
          { text: '😀', size: 35 }
        ]
  
        const layout = cloud()
          .size([500, 500])
          .words(data)
          .padding(5)
          .rotate(() => ~~(Math.random() * 2) * 90)
          .font('Impact')
          .fontSize(d => d.size)
          .on('end', draw)
        
        layout.start()
  
        function draw(words) {
          d3.select('#word-cloud').selectAll('*').remove()
          d3.select('#word-cloud').append('svg')
              .attr('width', layout.size()[0])
              .attr('height', layout.size()[1])
            .append('g')
              .attr('transform', `translate(${layout.size()[0] / 2}, ${layout.size()[1] / 2})`)
            .selectAll('text')
              .data(words)
            .enter().append('text')
              .style('font-size', d => `${d.size}px`)
              .style('font-family', 'Impact')
              .style('fill', (d, i) => d3.schemeCategory10[i % 10])
              .attr('text-anchor', 'middle')
              .attr('transform', d => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
              .text(d => d.text)
        }
      }
  
      return {
        sentiment,
        dataSource,
        generateCloud,
      }
    
    }
  }
  </script>
  