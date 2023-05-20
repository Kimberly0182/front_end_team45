<template>
  <div class="color-bar-wrapper">
    <div class="data-bar">
      <div class="data-bar-item">
        <p class="data-bar-text">{{ dataValues[0] }}</p>
      </div>
      <div
        v-for="(data, index) in dataValues.slice(1)"
        :key="index"
        class="data-bar-item"
      >
        <div class="placeholder"></div>
        <p class="data-bar-text">{{ data }}</p>
      </div>
    </div>
    <div class="color-bar">
      <div v-for="(color, index) in colors" :key="index" class="color-bar-item">
        <div
          :style="{ backgroundColor: color, opacity: 0.7 }"
          class="color-bar-color"
        ></div>
      </div>
    </div>

    <p class="color-bar-text">Age Distribution</p>
  </div>
</template>

<script>
export default {
  name: "AgeBar",
  data() {
    return {
      colors: [
        "#FFFDE3",
        "#FFF3BC",
        "#FFCC2D",
        "#FFAC43",
        "#FF761D",
        "#FF4711",
      ],
      dataValues: [30, 33, 35, 38, 40, 43],
    };
  },
};
</script>

<style>
.color-bar-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.color-bar {
  display: flex;
  align-items: center;
}

.color-bar-color {
  height: 20px;
  width: 100px;
}

.data-bar {
  display: flex;
  align-items: center;
  margin-bottom: 2px;
}

.data-bar-item {
  display: flex;
  align-items: center;
}

.placeholder {
  width: 15px;
}

.color-bar-text {
  margin-top: 2px;
}
</style>
