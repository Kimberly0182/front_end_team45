<template>
  <div>
    <h1>Welcome to the Map Page</h1>
    <AusMap />
  </div>
</template>

<script>
import AusMap from "./AusMap.vue";
export default {
  name: "MapPage",
  components: {
    AusMap,
  },
};
</script>
