<template>
  <div class="dashboard-container">
    <div class="chart-row">
      <div class="chart-card">
        <div class="chart-content">
          <DoughnutDiagram />
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
  import DoughnutDiagram from './graph/DoughnutDiagram.vue';

  export default {
    name: "SentimentDistribution",
    components: {
      DoughnutDiagram,
    },
  };
</script>