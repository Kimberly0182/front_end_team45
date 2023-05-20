<template>
    <div>
        <ScatterPlot/>
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