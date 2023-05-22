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
          <h1>This bar chart shows the correlation between emoji usage and population 
            language distribution. From the graph, people who speak Persian, Dutch, 
            and Arabic use the most emojis on Tweet, and people who speak German, English 
            and Croatian use the least.</h1>

          <h1>The use of emojis in different languages may be affected by several factors. 
            Some important ones may be geographic location and language structure. 
            It is possible that the visual aspect of emojis integrates more naturally with 
            some language, and that emojis are used more to clarify meaning.</h1> 
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