<template>
  <div>
    <div id="percentageMap" style="width: 100%; height: 92.1vh"></div>
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
        console.log(allData);

        map.data.setStyle(function (feature) {
          const properties = feature.getProperty("GCC_CODE21");
          let fillColor = "white";

          allData.forEach((data) => {
            if (properties === data.gcc) {
              const value = data.percentage;

              if (value >= 0.27) {
                fillColor = "#8B0000";
              } else if (value >= 0.25) {
                fillColor = "#DC143C";
              } else if (value >= 0.23) {
                fillColor = "#FF6347";
              } else if (value >= 0.21) {
                fillColor = "#FF8C00";
              } else if (value >= 0.2) {
                fillColor = "#FFD700";
              } else if (value >= 0.17) {
                fillColor = "#FFFACD";
              }
            }
          });

          return {
            fillColor: fillColor,
            strokeColor: "black",
            strokeWeight: 1.6,
            fillOpacity: 0.85,
          };
        });
      }
    });
  },
};
</script>
