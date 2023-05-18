<template>
  <div>
    <select v-model="selectedOption" @change="handleOptionChange">
      <option value="percentage">Emoji Percentage</option>
      <option value="age">Age vs. Emoji</option>
    </select>

    <PercentageMap v-if="selectedOption === 'percentage'" />
    <AgeMap v-else-if="selectedOption === 'age'" />
  </div>
</template>

<script>
import AgeMap from "./AgeMap.vue";
import PercentageMap from "./PercentageMap.vue";

export default {
  name: "MapDropdown",
  components: {
    AgeMap,
    PercentageMap,
  },
  data() {
    return {
      selectedOption: "percentage",
    };
  },
  methods: {
    handleOptionChange() {
      console.log("Selected option:", this.selectedOption);
    },
  },
};
</script>
