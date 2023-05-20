<template>
  <div>
    <div id="ageMap" style="width: 100%; height: 92.1vh"></div>
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
  name: "AgeMap",
  setup() {
    onMounted(async () => {
      // Load map
      await loader.load();
      let map = new google.maps.Map(document.getElementById("ageMap"), {
        center: { lat: -28.5, lng: 135 },
        zoom: 4.6,
        disableDefaultUI: true,
      });
      map.data.loadGeoJson("map.json");

      // Load data

      map.data.setStyle(function (feature) {
        const properties = feature.getProperty("GCC_CODE21");

        let fillColor = "white";

        if (properties === "1GSYD") {
          fillColor = "#8B0000";
        } else if (properties === "1RNSW") {
          fillColor = "#DC143C";
        } else if (properties === "2GMEL") {
          fillColor = "#FF6347";
        } else if (properties === "2RVIC") {
          fillColor = "#FF8C00";
        } else if (properties === "3GBRI") {
          fillColor = "#FFD700";
        } else if (properties === "3RQLD") {
          fillColor = "#FFFACD";
        } else if (properties === "4GADE") {
          fillColor = "#FF6347";
        } else if (properties === "4RSAU") {
          fillColor = "#FF7F50";
        } else if (properties === "5GPER") {
          fillColor = "#FF8C00";
        } else if (properties === "5RWAU") {
          fillColor = "#FFA500";
        } else if (properties === "6GHOB") {
          fillColor = "#FFD700";
        } else if (properties === "6RTAS") {
          fillColor = "#FFEC8B";
        } else if (properties === "7GDAR") {
          fillColor = "#FFFF00";
        } else if (properties === "7RNTE") {
          fillColor = "#FFFACD";
        } else if (properties === "8ACTE") {
          fillColor = "#FAFAD2";
        } else if (properties === "9OTER") {
          fillColor = "#F0FFF0";
        }

        return {
          fillColor: fillColor,
          strokeColor: "black",
          strokeWeight: 1.6,
          fillOpacity: 0.85,
        };
      });
    });
  },
};
</script>
