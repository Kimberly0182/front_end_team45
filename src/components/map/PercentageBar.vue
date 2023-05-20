<template>
  <div class="color-bar">
    <div v-for="(color, index) in colors" :key="index" class="color-bar-item">
      <div class="color-bar-number">{{ percentages[index] }}</div>
      <div :style="{ backgroundColor: color }" class="color-bar-color"></div>
    </div>
    <div class="color-bar-label">% of tweets contain emojis</div>
  </div>
</template>

<script>
export default {
  name: "PercentageBar",
  data() {
    return {
      colors: [
        "#FFFACD",
        "#FFD700",
        "#FF8C00",
        "#FF6347",
        "#DC143C",
        "#8B0000",
      ],
      percentages: [0.18, 0.2, 0.21, 0.23, 0.25, 0.27, 0.29],
    };
  },
};
</script>

<style>
.color-bar {
  display: flex;
  align-items: center;
}

.color-bar-item {
  position: relative;
  margin-right: -10px;
}

.color-bar-number {
  font-size: 12px;
  position: absolute;
  top: 4px;
  left: -20px;
}

.color-bar-color {
  width: 100px;
  height: 20px;
}

.color-bar-label {
  font-size: 12px;
  color: black;
  margin-top: 4px;
  margin-left: -10px;
}
</style>
