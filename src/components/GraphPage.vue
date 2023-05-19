<template>
  <div class="dashboard-container">
    <div class="chart-row">
      <div class="chart-card">
        <!-- Age -->
        <div class="chart-content">
          <ScatterPlot/>
        </div>
      </div>
      <div class="chart-card">
        <!-- Pie charts about sentiments-->
        <div class="chart-content">
          <DoughnutDiagram />
        </div>
      </div>
      <div class="chart-card">
        <!-- rank of emoji based on sentiments (mastodon and twitter) -->
        <div class="chart-content">
          <BarEmoji />
        </div>
      </div>
    </div>
  
    <div class="chart-row">
      <div class="chart-card">
        <!-- Nationality -->
        <div class="chart-content-2">
          <BarLanguage />
        </div>
      </div>
      <div class="chart-card">
        <!-- Different language -->
        <div class="chart-content-2">
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
import BarEmoji from './BarEmoji.vue';

export default {
  name: "GraphPage",
  components: {
    ScatterPlot,
    BarLanguage,
    BarCountry,
    DoughnutDiagram,
    BarEmoji,
  },
};
</script>

<style scoped>
.dashboard-container {
  font-family: 'Alegreya', serif;
  background-color: #F8F9FA;
  padding: 2rem;
  margin-left: 160px;
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
  padding: 2rem;
  margin: 0 1rem;
  flex: 1;
}

.chart-content {
  justify-content: center;
  align-items: center;
  display: flex;
  height: 610px;
}

.chart-content-2 {
  justify-content: center;
  align-items: center;
  display: flex;
  height: 450px;
}
</style>
