<template>
  <div ref="percentageMap" style="width: 100%; height: 92.1vh" />
</template>

<script>
/* eslint-disable no-undef */
import { ref, onMounted } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

const GOOGLE_MAPS_API_KEY = "AIzaSyDlJBBR9Jpp_kfM4ztufQUNan15FHYZzaw";

export default {
  name: "PercentageMap",
  setup() {
    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
    const percentageMap = ref(null);
    let map = ref(null);

    onMounted(async () => {
      await loader.load();
      map.value = new google.maps.Map(percentageMap.value, {
        center: { lat: -28.5, lng: 135 },
        zoom: 4.6,
        disableDefaultUI: true,
      });
    });

    return { percentageMap };
  },
};
</script>
