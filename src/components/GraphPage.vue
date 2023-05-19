<template>
  <div class="dashboard-container">
    <div class="chart-row">
      <div class="chart-card">
        <!-- Age -->
        <div class="chart-content-2">
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
  margin-left: 250px;
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
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chart-content-2 {
  height: 600px; 
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
