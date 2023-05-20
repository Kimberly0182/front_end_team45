import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/components/Homepage.vue";
import Map from "@/components/MapPage.vue";
import Graph from "@/components/GraphPage.vue";
import AgeVsEmoji from "@/components/AgeVsEmoji.vue";
import CorrelationCoefficientVsLanguage from "@/components/CorrelationCoefficientVsLanguage.vue";
import CorrelationCoefficientVsAncestry from "@/components/CorrelationCoefficientVsAncestry.vue";
import SentimentDistribution from "@/components/SentimentDistribution.vue";
import Top10Emoji from "@/components/Top10Emoji.vue";

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
  {
    path: "/age-vs-emoji",
    name: "Age vs Emoji",
    component: AgeVsEmoji,
  },
  {
    path: "/correlation-coefficient-vs-language",
    name: "Correlation Coefficient vs Language",
    component: CorrelationCoefficientVsLanguage,
  },
  {
    path: "/correlation-coefficient-vs-ancestry",
    name: "Correlation Coefficient vs Ancestry",
    component: CorrelationCoefficientVsAncestry,
  },
  {
    path: "/sentiment-distribution",
    name: "Sentiment Distribution",
    component: SentimentDistribution,
  },
  {
    path: "/top-10-emoji",
    name: "Top 10 Emoji",
    component: Top10Emoji,
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
