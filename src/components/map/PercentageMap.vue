<template>
  <div>
    <div id="percentageMap" style="width: 100%; height: 100vh"></div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import { onMounted } from "vue";
import { Loader } from "@googlemaps/js-api-loader";
import { getTwitterGeoData } from "@/api/api";

const loader = new Loader({
  apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
  language: "en",
});

export default {
  name: "PercentageMap",

  setup() {
    onMounted(async () => {
      // Load map
      await loader.load();
      let map = new google.maps.Map(document.getElementById("percentageMap"), {
        center: { lat: -28.5, lng: 135 },
        zoom: 4.6,
        disableDefaultUI: true,
      });
      map.data.loadGeoJson("map.json");

      // Load data
      const rawData = await getTwitterGeoData();
      if (rawData) {
        var allData = Object.entries(rawData).map(([key, item]) => {
          return { gcc: key, percentage: item.percentage };
        });

        map.data.setStyle(function (feature) {
          const properties = feature.getProperty("GCC_CODE21");
          let fillColor = "white";
          allData.forEach((data) => {
            if (properties === data.gcc) {
              const value = data.percentage;
              if (value >= 0.27) {
                fillColor = "#FF761D";
              } else if (value >= 0.25) {
                fillColor = "#FFAC43";
              } else if (value >= 0.23) {
                fillColor = "#FFCC2D";
              } else if (value >= 0.2) {
                fillColor = "#FFF3BC";
              } else if (value >= 0.17) {
                fillColor = "#FFFDE3";
              }
            }
          });

          return {
            fillColor: fillColor,
            strokeColor: "black",
            strokeWeight: 1.5,
            fillOpacity: 0.7,
          };
        });
      }
    });
  },
};
</script>
