import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import SubscriptionsView from "@/views/SubscriptionsView.vue";
import SettingsView from "@/views/SettingsView.vue";
import ReferrerView from "@/views/ReferrerView.vue";
import DownloadView from "@/views/DownloadView.vue";
import FaqView from "@/views/FaqView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeView },
    { path: "/subscriptions", component: SubscriptionsView },
    { path: "/settings", component: SettingsView },
    { path: "/referrer", component: ReferrerView },
    { path: "/download", component: DownloadView },
    { path: "/faq", component: FaqView },
  ],
});

export default router;
