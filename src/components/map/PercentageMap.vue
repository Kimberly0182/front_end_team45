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
      // Load map
      await loader.load();
      let map = new google.maps.Map(document.getElementById("percentageMap"), {
        center: { lat: -28.5, lng: 135 },
        zoom: 4.6,
        disableDefaultUI: true,
      });
      map.data.loadGeoJson("map.json");

      // Load data

      map.data.setStyle(function (feature) {
        const properties = feature.getProperty("GCC_CODE21");

        let fillColor = "white";
        let strokeColor = "black";
        let fillOpacity = 0.8;

        if (properties === "1GSYD") {
          fillColor = "#8B0000 ";
          fillOpacity = 0.8;
        } else if (properties === "1RNSW") {
          fillColor = "#A52A2A ";
          fillOpacity = 0.8;
        } else if (properties === "2GMEL") {
          fillColor = "#B22222";
          fillOpacity = 0.8;
        } else if (properties === "2RVIC") {
          fillColor = "#DC143C";
          fillOpacity = 0.8;
        } else if (properties === "3GBRI") {
          fillColor = "#FF0000";
          fillOpacity = 0.8;
        } else if (properties === "3RQLD") {
          fillColor = "#FF4500 ";
          fillOpacity = 0.8;
        } else if (properties === "4GADE") {
          fillColor = "#FF6347";
          fillOpacity = 0.8;
        } else if (properties === "4RSAU") {
          fillColor = "#FF7F50";
          fillOpacity = 0.8;
        } else if (properties === "5GPER") {
          fillColor = "#FF8C00 ";
          fillOpacity = 0.8;
        } else if (properties === "5RWAU") {
          fillColor = "#FFA500";
          fillOpacity = 0.8;
        } else if (properties === "6GHOB") {
          fillColor = "#FFD700";
          fillOpacity = 0.8;
        } else if (properties === "6RTAS") {
          fillColor = "#FFEC8B";
          fillOpacity = 0.8;
        } else if (properties === "7GDAR") {
          fillColor = "#FFFF00";
          fillOpacity = 0.8;
        } else if (properties === "7RNTE") {
          fillColor = "#FFFACD";
          fillOpacity = 0.8;
        } else if (properties === "8ACTE") {
          fillColor = "#FAFAD2 ";
          fillOpacity = 0.8;
        } else if (properties === "9OTER") {
          fillColor = "#F0FFF0";
          fillOpacity = 0.8;
        }

        return {
          fillColor: fillColor,
          strokeColor: strokeColor,
          strokeWeight: 1,
          fillOpacity: fillOpacity,
        };
      });
    });
  },
};
</script>
