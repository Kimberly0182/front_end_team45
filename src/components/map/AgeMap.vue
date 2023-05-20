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
      await loader.load();

      let map = new google.maps.Map(document.getElementById("ageMap"), {
        center: { lat: -28.5, lng: 135 },
        zoom: 4.6,
        disableDefaultUI: true,
      });
      map.data.loadGeoJson("map.json");

      map.data.setStyle(function (feature) {
        const properties = feature.getProperty("GCC_CODE21");

        let fillColor = "white";
        let strokeColor = "black";
        let fillOpacity = 0.8;

        if (properties === "1GSYD") {
          fillColor = "#FF4500";
          fillOpacity = 1;
        } else if (properties === "2GMEL") {
          fillColor = "#FF6600";
          fillOpacity = 1;
        } else if (properties === "3GBRI") {
          fillColor = "#FF8800";
          fillOpacity = 1;
        } else if (properties === "4GADE") {
          fillColor = "#FFAA00";
          fillOpacity = 1;
        } else if (properties === "5GPER") {
          fillColor = "#FFBB33";
          fillOpacity = 1;
        } else if (properties === "6GHOB") {
          fillColor = "#FFCC66";
          fillOpacity = 1;
        } else if (properties === "7GDAR") {
          fillColor = "#FFDD99";
          fillOpacity = 1;
        } else if (properties === "8ACTE") {
          fillColor = "#FFEECC";
          fillOpacity = 1;
        } else if (properties === "9OTER") {
          fillColor = "#FFEECC";
          fillOpacity = 1;
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
