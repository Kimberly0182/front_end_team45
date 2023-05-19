<template>
  <div class="cloud-container">
    <div class="controls">
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
    <div id="word-cloud"></div>
  </div>
</template>
  
<script>
import { ref, onMounted } from 'vue'
import * as d3 from 'd3'
import cloud from 'd3-cloud'

import { getTwitterEmoji } from '@/api/api'
import { getTwitterPositive } from '@/api/api'
import { getTwitterNegative } from '@/api/api'
import { getTwitterNeutral } from '@/api/api'
import { getMastodonEmoji } from '@/api/api'
import { getMastodonPositive } from '@/api/api'
import { getMastodonNegative } from '@/api/api'
import { getMastodonNeutral } from '@/api/api'

export default {
  name: "EmojiCloud",
  setup() {
    const twitterEmojiData = ref([])
    const twitterPositiveData = ref([])
    const twitterNegativeData = ref([])
    const twitterNeutralData = ref([])
    const mastodonEmojiData = ref([])
    const mastodonPositiveData = ref([])
    const mastodonNegativeData = ref([])
    const mastodonNeutralData = ref([])

    onMounted(async () => {
      twitterEmojiData.value = await getTwitterEmoji()
      twitterPositiveData.value = await getTwitterPositive()
      twitterNegativeData.value = await getTwitterNegative()
      twitterNeutralData.value = await getTwitterNeutral()
      mastodonEmojiData.value = await getMastodonEmoji()
      mastodonPositiveData.value = await getMastodonPositive()
      mastodonNegativeData.value = await getMastodonNegative()
      mastodonNeutralData.value = await getMastodonNeutral()
    })

    const sentiment = ref('total')
    const dataSource = ref('mastodon')

    const generateCloud = () => {
      let data;
      if (sentiment.value === 'total' && dataSource.value === 'twitter') {
        data = twitterEmojiData.value.map(item => ({
          text: item.emoji + item.emoji_name.replace(/:/, '').replace(/:/, ''),
          size: Math.sqrt(item.count) / 9,
        }))
      } else if (sentiment.value === 'positive' && dataSource.value === 'twitter') {
        data = twitterPositiveData.value.map(item => ({
          text: item.emoji + item.emoji_name.replace(/:/, '').replace(/:/, ''),
          size: Math.sqrt(item.count) / 5,
        }))
      } else if (sentiment.value === 'negative' && dataSource.value === 'twitter') {
        data = twitterNegativeData.value.map(item => ({
          text: item.emoji + item.emoji_name.replace(/:/, '').replace(/:/, ''),
          size: Math.sqrt(item.count) / 4.5,
        }))
      } else if (sentiment.value === 'neutral' && dataSource.value === 'twitter') {
        data = twitterNeutralData.value.map(item => ({
          text: item.emoji + item.emoji_name.replace(/:/, '').replace(/:/, ''),
          size: Math.sqrt(item.count) / 6,
        }))
      } else if (sentiment.value === 'total' && dataSource.value === 'mastodon') {
        data = mastodonEmojiData.value.map(item => ({
          text: item.emoji + item.emoji_name.replace(/:/, '').replace(/:/, ''),
          size: item.percentage * 250,
        }))
      } else if (sentiment.value === 'positive' && dataSource.value === 'mastodon') {
        data = mastodonPositiveData.value.map(item => ({
          text: item.emoji + item.emoji_name.replace(/:/, '').replace(/:/, ''),
          size: item.percentage * 250 ,
        }))
      } else if (sentiment.value === 'negative' && dataSource.value === 'mastodon') {
        data = mastodonNegativeData.value.map(item => ({
          text: item.emoji + item.emoji_name.replace(/:/, '').replace(/:/, ''),
          size: item.percentage * 250 ,
        }))
      } else if (sentiment.value === 'neutral' && dataSource.value === 'mastodon') {
        data = mastodonNeutralData.value.map(item => ({
          text: item.emoji + item.emoji_name.replace(/:/, '').replace(/:/, ''),
          size: item.percentage * 250,
        }))
      }

      const layout = cloud()
        .size([660, 660])
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

<style scoped>
.cloud-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.controls {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 10px;
}

.controls select, .controls button {
  margin: 0 10px;
}

.controls button {
  background-color: #ffa000;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
}

.controls button:hover {
  background-color: #ffa000;
  cursor: pointer;
}
</style>