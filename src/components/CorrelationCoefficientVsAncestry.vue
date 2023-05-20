<template>
    <div>
        <BarCountry/>
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