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

<style>
.dashboard-container {
  font-family: 'Alegreya', serif;
  background-color: #F8F9FA;
  margin-left: 160px;
  padding: 2rem;
}

.chart-row {
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 3rem;
  max-width: 1200px;
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
  display: flex;
  height: 610px;
}
</style>