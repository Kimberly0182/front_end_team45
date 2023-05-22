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
          <h1>By comparing the different proportions of different sentiment posts 
            on Twitter and Mastodon, it can be seen that Twitter has a high 
            proportion of positive posts, taking almost half of all the posts. 
            While for Mastodon, posts with neutral sentiments seem to appear more common, 
            having a proportion of slightly over half. Many factors could cause this. 
            First, The user base of Twitter and Mastodon may be different; factors such 
            as the users' age, education, and occupation could influence the sentiment 
            of their posts. Additionally, the purpose of usage could also be different, 
            while Twitter is often used for news, updates, and public figures' comments 
            which could all have a positive sentiment. While for Mastodon, the users could 
            focus on their personal blogging or technical discussions, which could lead to 
            more neural posts. </h1> 
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