<template>
  <div class="dashboard-container">
    <div class="chart-row">
      <div class="chart-card">
        <div class="chart-content">
          <ScatterPlot/>
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
  import ScatterPlot from './graph/ScatterPlot';

  export default {
    name: "AgeVsEmoji",
    components: {
      ScatterPlot,
    },
  };
</script>