<template>
  <div class="dashboard-container">
    <div class="header">
      <h1>Welcome to the Graph Page</h1>
      <div class="section">
        <h2 class="title">Data Analysis</h2>
        <h3 class="subtitle">Small Subtitle</h3>
      </div>
    </div>

    <div class="chart-row">
      <div class="chart-card">
        <!-- Age -->
        <div class="chart-content">
          <ScatterPlot/>
        </div>
      </div>
      <div class="chart-card">
        <!-- Pie charts about sentiments-->
        <div class="chart-content-2">
          <DoughnutDiagram />
        </div>
      </div>
      <div class="chart-card">
        <!-- rank of emoji based on sentiments (mastodon and twitter) -->
        <div class="chart-content-2">
          <EmojiCloud />
        </div>
      </div>
    </div>
  
    <div class="chart-row">
      <div class="chart-card">
        <!-- Nationality -->
        <div class="chart-content">
          <BarLanguage />
        </div>
      </div>
      <div class="chart-card">
        <!-- Different language -->
        <div class="chart-content">
          <BarCountry />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScatterPlot from './ScatterPlot';
import BarLanguage from './BarLanguage.vue';
import BarCountry from './BarCountry.vue';
import DoughnutDiagram from './DoughnutDiagram.vue';
import EmojiCloud from './EmojiCloud.vue';

export default {
  name: "GraphPage",
  components: {
    ScatterPlot,
    BarLanguage,
    BarCountry,
    EmojiCloud,
    DoughnutDiagram,
  },
};
</script>

<style scoped>
.dashboard-container {
  padding: 2rem;
  background-color: #F8F9FA;
  font-family: 'Alegreya', serif;
}

.header {
  text-align: center;
  color: #343a40;
  margin-bottom: 3rem;
}

.header h1, .header h2, .header h3 {
  margin-bottom: 0.5rem;
}

.chart-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.chart-card {
  flex: 1;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 0 1rem;
}

.chart-content {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chart-content-2 {
  height: 700px; 
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
