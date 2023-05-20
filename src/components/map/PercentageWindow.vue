<template>
  <div>
    <button v-if="!showText" @click="showText = true" class="click-button">
      Click Me
    </button>
    <div v-if="showText" class="text-area">Data analysis for percentage.</div>
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
  height: 100px;
  background-color: #f0f0f0;
  padding: 10px;
  font-size: 12px;
}

.click-button,
.close-button {
  font-size: 16px;
  border: 1px solid #ccc;
}
</style>
