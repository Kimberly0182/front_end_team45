<template>
  <div class="dashboard-container">
    <div class="chart-row-1">
      <div class="chart-graph">
        <!-- Age -->
        <div class="chart-content">
          <ScatterPlot/>
        </div>
      </div>
      <div class="chart-graph">
        <!-- Pie charts about sentiments-->
        <div class="chart-content">
          <DoughnutDiagram />
        </div>
      </div>
      <div class="chart-graph">
        <!-- rank of emoji based on sentiments (mastodon and twitter) -->
        <div class="chart-content">
          <BarEmoji />
        </div>
      </div>
    </div>
  
    <div class="chart-row-1">
      <div class="chart-graph">
        <!-- Nationality -->
        <div class="chart-content-2">
          <BarLanguage />
        </div>
      </div>
      <div class="chart-graph">
        <!-- Different language -->
        <div class="chart-content-2">
          <BarCountry />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScatterPlot from './graph/ScatterPlot';
import BarEmoji from './graph/BarEmoji.vue';
import BarCountry from './graph/BarCountry.vue';
import BarLanguage from './graph/BarLanguage.vue';
import DoughnutDiagram from './graph/DoughnutDiagram.vue';


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
  margin-left: 160px;
  padding: 2rem;
}

.chart-row-1 {
  justify-content: space-between;
  display: flex;
  margin-bottom: 3rem;
}

.chart-graph {
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
