import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/subscriptions", component: () => import("../views/HomeView.vue") },
  { path: "/settings", component: () => import("../views/HomeView.vue") },
  { path: "/referrer", component: () => import("../views/HomeView.vue") },
  { path: "/download", component: () => import("../views/HomeView.vue") },
  { path: "/faq", component: () => import("../views/HomeView.vue") },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
