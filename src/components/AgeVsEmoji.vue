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
          <h1>This scatter plot shows a clear negative correlation 
            between median age and the proportion of emoji in the Tweets 
            of that area. It suggests that people are less likely to use 
            emojis as age increases.This is reasonable because emojis were 
            developed around the 1990s and became popular worldwide in the 2010s.</h1>

          <h1>Therefore, an area's emoji utilisation is predictable 
            based on the median age of that area. 
            A simple linear regression is applied to the scatter plot 
            using the ordinary least square method, suggesting the equation:
            Percentage = 0.4671 - 0.0051*age.
            The significance of this regression is ensured by the F-statistic 
            of 0.0016, and the R-square value of 0.689 further suggests that this 
            regression model can explain a considerable variation in the data.</h1> 
          
          <h3>Note: </h3>
          <h2>The regression above was generated after removing some values, 
            they are: 6RTAS, 7GDAR, 7RNTE, 8ACTE and 9OTER.</h2>
          <h2>Only 8ACTE (Australian Capital Territories) is removed as 
            an outlier that will affect the regression model. </h2>
          <h2>Other areas are removed because of insufficient data.</h2>
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

<style>
.dashboard-container {
  font-family: 'Alegreya', serif;
  background-color: #F8F9FA;
  margin-left: 100px;
  padding: 2rem;
}

.chart-row {
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 3rem;
  max-width: 1000px;
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

.chart-card h1{
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 20px;
}

.chart-card h2{
  font-size: 16px;
  text-align: left;
  font-style: italic;
}

.chart-card h3{
  border-top: 1px solid #000;
  font-weight: bold;
  text-align: left;
  margin-top: 20px;
  font-size: 18px;
}

@media (max-width: 1200px) {
  .chart-graph {
    flex: 1 0 46%;
  }
}

@media (max-width: 800px) {
  .chart-graph {
    flex: 1 0 100%;
  }
}
</style>