<template>
  <div class="container">
    <div class="content">
      <h1>Welcome to the Graph Page</h1>
      <div class="section">
        <h2 class="title">Data Analysis</h2>
        <h3 class="subtitle">Small Subtitle</h3>
      </div>
    </div>
  </div>

  <!-- Age -->
  <div class="age"><ScatterPlot/></div>

  <!-- Nationality -->
  <div>
    <BarChart />
  </div>

  <!-- Different language -->
  <div>

  </div>

  <!-- two pie charts about sentiments-->
  <!-- mastodon -->
  <div>
    <PieChart />
  </div>
  <!-- twitter -->
  <div>
    <PieChart />
  </div>


  <!-- rank of emoji based on sentiments (mastodon and twitter) -->
  <div>
    <EmojiCloud />
  </div>


  <!-- reference -->
  <div class="reference">
    
  </div>

</template>

<script>
import ScatterPlot from './ScatterPlot';
import BarChart from './BarChart.vue';
import PieChart from './PieChart.vue';
import EmojiCloud from './EmojiCloud.vue';

export default {
  name: "GraphPage",
  components: {
    ScatterPlot,
    BarChart,
    PieChart,
    EmojiCloud,
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  background-color: #ffc107;
}

.content {
  width: 100%;
  padding: 2rem;
  border: none;
}

.content h1 {
  color: white;
  font-family: 'Alegreya', serif;
}

.section {
  margin-top: 1.5rem;
}

.title {
  color: white;
  font-family: 'Alegreya', serif;
}

.subtitle {
  font-size: 14px;
  color: white;
  font-family: 'Alegreya', serif;
}

.age {
  padding: 2rem;
}

.chart {
  background-color: white;
  padding: 2rem;
}

.reference {
  padding: 2rem;
}

.white-bg {
  background-color: white;
}
</style>
