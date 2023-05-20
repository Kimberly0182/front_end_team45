<template>
  <div class="dashboard-container">
    <div class="chart-row">
      <div class="chart-card">
        <div class="chart-content">
          <BarLanguage/>
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
  import BarLanguage from './graph/BarLanguage.vue';

  export default {
    name: "CorrelationCoefficientVsLanguage",
    components: {
      BarLanguage,
    },
  };
</script>