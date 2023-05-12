import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/components/Homepage.vue";
import Map from "@/components/MapPage.vue";
import Graph from "@/components/GraphPage.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/map",
    name: "Map",
    component: Map,
  },
  {
    path: "/graph",
    name: "Graph",
    component: Graph,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  document.title = to.name ?? "COMP90024";
});

export default router;
