<template>
  <div>
    <div id="percentageMap" style="width: 100%; height: 92.1vh"></div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import { onMounted } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
  language: "en",
});

export default {
  name: "PercentageMap",
  setup() {
    onMounted(async () => {
      await loader.load();

      let map = new google.maps.Map(document.getElementById("percentageMap"), {
        center: { lat: -28.5, lng: 135 },
        zoom: 4.6,
        disableDefaultUI: true,
      });
      map.data.loadGeoJson("map.json");

      map.data.setStyle(function (feature) {
        const properties = feature.getProperty("GCC_CODE21");

        let fillColor = "grey";
        let strokeColor = "black";

        if (properties === "1GSYD") {
          fillColor = "#FF3300";
        } else if (properties === "2GMEL") {
          fillColor = "#3352FF";
        } else if (properties === "3GBRI") {
          fillColor = "#3352FF";
        } else if (properties === "4GADE") {
          fillColor = "#3352FF";
        } else if (properties === "5GPER") {
          fillColor = "#3352FF";
        } else if (properties === "6GHOB") {
          fillColor = "#3352FF";
        } else if (properties === "7GDAR") {
          fillColor = "#3352FF";
        } else if (properties === "8ACTE") {
          fillColor = "#3352FF";
        } else if (properties === "9OTER") {
          fillColor = "#3352FF";
        }

        return {
          fillColor: fillColor,
          strokeColor: strokeColor,
          strokeWeight: 1,
        };
      });
    });
  },
};
</script>
