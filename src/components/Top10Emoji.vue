<template>
  <div class="dashboard-container">
    <div class="chart-row">
      <div class="chart-card">
        <div class="chart-content">
          <BarEmoji />
        </div>
      </div>
      
      <div class="chart-card">
        <div class="chart-content">
          <EmojiCloud />
        </div>
      </div>
    </div>

    <div class="chart-row">
      <div class="chart-card">
        <div>
          <h1>Analysis</h1> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BarEmoji from './graph/BarEmoji.vue';
  import EmojiCloud from './graph/EmojiCloud.vue';

  export default {
    name: "Top10Emoji",
    components: {
        BarEmoji,
        EmojiCloud,
    },
  };
</script>

<style>
.dashboard-container {
  font-family: 'Alegreya', serif;
  background-color: #F8F9FA;
  margin-left: 160px;
  padding: 2rem;
}

.chart-row {
  justify-content: space-between;
  display: flex;
  margin-bottom: 3rem;
}

.chart-card {
  background-color: white;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  margin: 0 1rem;
  padding: 2rem;
  flex: 1;
}

.chart-content {
  justify-content: center;
  align-items: center;
  height: 660px;
}
</style>
