<template>
    <div class="sidebar">
      <ul>
        <li class="page"><router-link to="/" exact>Homepage</router-link></li>
        <li class="page"><router-link to="/map">Map</router-link></li>
        <li class="page"><router-link to="/graph">Graph</router-link></li>
        <li class="graph"><router-link to="/age-vs-emoji">Age vs Emoji</router-link></li>
        <li class="graph"><router-link to="/correlation-coefficient-vs-language">Correlation coef. vs Language</router-link></li>
        <li class="graph"><router-link to="/correlation-coefficient-vs-ancestry">Correlation coef. vs Ancestry</router-link></li>
        <li class="graph"><router-link to="/sentiment-distribution">Sentiment Distribution</router-link></li>
        <li class="graph"><router-link to="/top-10-emoji">Top 10 Emoji</router-link></li>
      </ul>
    </div>
  </template>
  
<script>
  export default {
    name: "SideBar"
  };
</script>
  
<style scoped>
  .sidebar {
    background: linear-gradient(to bottom, #ebe5bd, #ffa000);
    font-family: 'Alegreya', serif;
    position: fixed;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    padding: 1rem;
    width: 160px;
    height: 100%;
    left: 0;
    top: 0;
  }
  
  .sidebar ul {
    justify-content: center;
    flex-direction: column;
    list-style: none;
    display: flex;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  

  .sidebar a {
    text-decoration: none;
    font-weight: bold;
    color: #fff;
  }

  .page {
    font-size: 1.2rem;
    margin: 1rem 0;
  }
  
  .sidebar a:hover {
    text-decoration: underline;
  }

  .graph {
    font-size: 10px !important;
    margin-top: 6px;
  }
</style>