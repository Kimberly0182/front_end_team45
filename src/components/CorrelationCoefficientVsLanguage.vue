<template>
    <div>
        <BarLanguage />
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