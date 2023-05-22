<template>
  <div>
    <button v-if="!showText" @click="showText = true" class="click-button">
      Click Me
    </button>
    <div v-if="showText" class="text-area">
      <p v-if="showText">
        There is a drop-down menu on the top left corner of the map showing the
        following:
      </p>
      <p v-if="showText">
        1.The proportion of tweets containing emojis in each area.
      </p>
      <p v-if="showText">2.The median age of each area population.</p>
      <p v-if="showText">
        From the two maps, the age and the emoji proportion may have a negative
        correlation. That is, in areas that are younger in the median, the more
        tweet will contain emojis, and vice versa. Except there are some
        outliers, namely the northern and capital territories.
      </p>
      <p v-if="showText">(more on this is discussed in the graph section)</p>
    </div>
    <button v-if="showText" @click="showText = false" class="close-button">
      Close
    </button>
  </div>
</template>

<script>
export default {
  name: "PercentageWindow",
  data() {
    return {
      showText: false,
    };
  },
};
</script>

<style>
.text-area {
  width: 200px;
  height: 305px;
  background-color: #f0f0f0;
  padding: 10px;
  font-size: 12px;
  text-align: left;
}

.click-button,
.close-button {
  font-size: 16px;
  border: 1px solid #ccc;
}
</style>
