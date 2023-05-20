<template>
  <div class="color-bar-wrapper">
    <div class="data-bar">
      <div
        v-for="(data, index) in dataValues"
        :key="index"
        class="data-bar-item"
      >
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
}

.data-bar-item {
  margin-right: 20px;
}

.data-bar-text {
  margin: 0;
}

.color-bar-text {
  margin-top: 0px;
}
</style>
