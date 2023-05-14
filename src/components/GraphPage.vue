<template>
  <div class="container">
    <div class="content">
      <h1>Welcome to the Graph Page</h1>
      <div class="section">
        <h2 class="title">Data Analysis</h2>
        <h3 class="subtitle">Small Subtitle</h3>
      </div>
    </div>
  </div>

  <div class="grid">
    <div class="chart white-bg">
      <!-- 第一个图表 -->
    </div>
    <div class="chart white-bg">
      <!-- 第二个图表 -->
    </div>
    <div class="chart white-bg">
      <!-- 第三个图表 -->
    </div>
    <div class="chart white-bg">
      <!-- 第四个图表 -->
    </div>
  </div>

  <div class="reference">
    <!-- reference内容 -->
  </div>

</template>

<script>
export default {
  name: "GraphPage",
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  background-color: #ffc107;
}

.content {
  width: 100%;
  padding: 2rem;
  border: none;
}

.content h1 {
  color: white;
  font-family: 'Alegreya', serif;
}

.section {
  margin-top: 1.5rem;
}

.title {
  color: white;
  font-family: 'Alegreya', serif;
}

.subtitle {
  font-size: 14px;
  color: white;
  font-family: 'Alegreya', serif;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.chart {
  background-color: white;
  padding: 2rem;
}

.reference {
  background-color: #FFECB3;
  padding: 2rem;
}

.white-bg {
  background-color: white;
}
</style>
