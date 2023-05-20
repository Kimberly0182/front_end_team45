<template>
    <div>
        <DoughnutDiagram />
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