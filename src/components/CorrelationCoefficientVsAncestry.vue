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
          <h1>This bar chart shows the correlation between emoji usage and population 
            ancestry distribution. From the graph, Italian, South African and Lebanese 
            use the most emojis on Tweet, and Irish, Australian and Scottish use the least.</h1>
          
          <h1>The use of emojis of people having different ancestry backgrounds may be affected 
            by several factors. Some important ones may be the cultural influence. An individual's 
            ancestry or cultural background can significantly influence their communication style, 
            whether using certain words, phrases, or non-verbal cues like emojis. On the other hand, 
            individuals with multicultural backgrounds might show different emoji use patterns reflecting 
            the influences of multiple cultures or ancestries.</h1>
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