<template>
  <div class="dashboard-container">
    <div class="chart-row">
      <div class="chart-card">
        <div class="chart-content">
          <BarCountry/>
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
  import BarCountry from './graph/BarCountry.vue';

  export default {
    name: "CorrelationCoefficientVsAncestry",
    components: {
      BarCountry,
    },
  };
</script>