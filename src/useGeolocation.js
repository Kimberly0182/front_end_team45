import { onUnmounted, onMounted, ref } from "vue";

export function useGeolocation() {
  const coords = ref({ latitude: -37.8, longitude: 144.96 });
  const isSupported = "navigator" in window && "geolocation" in navigator;

  let watcher = null;
  onMounted(() => {
    if (isSupported)
      watcher = navigator.geolocation.watchPosition(
        (position) => (coords.value = position.coords)
      );
  });
  onUnmounted(() => {
    if (watcher) navigator.geolocation.clearWatch(watcher);
  });

  return { coords, isSupported };
}
