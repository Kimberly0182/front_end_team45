<template>
  <div id="percentageMap" style="width: 100%; height: 92.1vh" />
</template>

<script>
/* eslint-disable no-undef */
import { onMounted } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

const GOOGLE_MAPS_API_KEY = "AIzaSyDlJBBR9Jpp_kfM4ztufQUNan15FHYZzaw";

export default {
  name: "PercentageMap",
  setup() {
    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });

    onMounted(async () => {
      await loader.load();

      let map = new google.maps.Map(document.getElementById("percentageMap"), {
        center: { lat: -28.5, lng: 135 },
        zoom: 4.6,
      });
      map.data.loadGeoJson("../../utils/map.json");
    });

    return { percentageMap };
  },
};
</script>
