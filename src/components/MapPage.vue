<template>
  <div class="map-container">
    <MapDropdown />
  </div>
</template>

<script>
import MapDropdown from "./map/MapDropdown.vue";

export default {
  name: "MapPage",
  components: {
    MapDropdown,
  },
};
</script>

<style>
.map-container {
  text-align: center;
  padding-bottom: 10rem;
  margin-left: 200px;
}
</style>
