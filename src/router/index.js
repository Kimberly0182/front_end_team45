import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/components/Homepage.vue";
import Map from "@/components/MapPage.vue";
import Graph from "@/components/GraphPage.vue";

const routes = [
    {
      path: "/",
      name: "homepage",
      component: Homepage
    },
    {
      path: "/map",
      name: "map",
      component: Map
    },
    {
      path: "/graph",
      name: "graph",
      component: Graph
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;