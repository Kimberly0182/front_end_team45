<template>
  <div class="color-bar">
    <div v-for="(color, index) in colors" :key="index" class="color-bar-item">
      <div class="color-bar-number">{{ ages[index] }}</div>
      <div :style="{ backgroundColor: color }" class="color-bar-color"></div>
    </div>
    <div class="color-bar-label">Age distribution</div>
  </div>
</template>

<script>
export default {
  name: "AgeBar",
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
      ages: [30, 33, 35, 38, 40, 43, 45],
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
