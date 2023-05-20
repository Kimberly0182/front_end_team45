<template>
  <div class="map-container">
    <PercentageMap v-if="selectedOption === 'percentage'" />
    <AgeMap v-else-if="selectedOption === 'age'" />
    <div class="map-select">
      <select v-model="selectedOption">
        <option value="percentage">Emoji Percentage</option>
        <option value="age">Age vs. Emoji</option>
      </select>
    </div>
    <div class="analysis">
      <PercentageWindow v-if="selectedOption === 'percentage'" />
      <AgeWindow v-else-if="selectedOption === 'age'" />
    </div>
    <div class="bar">
      <PercentageBar v-if="selectedOption === 'percentage'" />
      <AgeBar v-else-if="selectedOption === 'age'" />
    </div>
  </div>
</template>

<script>
import AgeBar from "./map/AgeBar.vue";
import AgeMap from "./map/AgeMap.vue";
import AgeWindow from "./map/AgeWindow.vue";
import PercentageBar from "./map/PercentageBar.vue";
import PercentageMap from "./map/PercentageMap.vue";
import PercentageWindow from "./map/PercentageWindow.vue";

export default {
  name: "MapPage",
  components: {
    AgeBar,
    AgeMap,
    AgeWindow,
    PercentageBar,
    PercentageMap,
    PercentageWindow,
  },
  data() {
    return {
      selectedOption: "percentage",
    };
  },
};
</script>

<style>
.map-container {
  margin-left: 192px;
}

.bar {
  position: absolute;
  left: 18%;
  top: 80%;
  z-index: 1;
}

.map-select {
  position: absolute;
  left: 20%;
  top: 10%;
  display: inline-block;
  font-family: Arial, sans-serif;
  z-index: 1;
}

.analysis {
  position: absolute;
  left: 80%;
  top: 10%;
  display: inline-block;
  font-family: Arial, sans-serif;
  z-index: 1;
}

.map-select select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: white;
  border: 1px solid #ccc;
  padding: 0.5em 2em 0.5em 1em;
  font-size: 16px;
  width: 200px;
  cursor: pointer;
}

.map-select::after {
  content: "\25BC";
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 12px;
  pointer-events: none;
}

.map-select select option {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
