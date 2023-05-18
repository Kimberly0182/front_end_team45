<template>
  <div ref="mapDiv" style="width: 100%; height: 92.1vh" />
</template>

<script>
/* eslint-disable no-undef */
import { computed, ref, onMounted } from "vue";
import { useGeolocation } from "../useGeolocation";
import { Loader } from "@googlemaps/js-api-loader";

const GOOGLE_MAPS_API_KEY = "AIzaSyDlJBBR9Jpp_kfM4ztufQUNan15FHYZzaw";

export default {
  name: "AusMap",
  setup() {
    const { coords } = useGeolocation();
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    }));

    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
    const mapDiv = ref(null);
    let map = ref(null);

    onMounted(async () => {
      await loader.load();
      map.value = new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 4.6,
      });
    });

    return { currPos, mapDiv };
  },
};
</script>
