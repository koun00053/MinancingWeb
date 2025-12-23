<template>
  <header class="topbar">
    <div class="logo">
      <img src="@/assets/logo.png" />
      <span>Menacing Dashboard & Loader Portal</span>
    </div>

    <nav class="nav">
      <span v-for="item in items" :key="item.path" @click="go(item.path)">
        <span class="dot">•</span>
        <span :class="{ active: route.path === item.path }">{{
          item.label
        }}</span>
      </span>
    </nav>

    <button class="login-btn" @click="$emit('open-login')">Login</button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();

    const items = [
      { label: "SUBSCRIPTIONS", path: "/subscriptions" },
      { label: "SETTINGS", path: "/settings" },
      { label: "REFERRER", path: "/referrer" },
      { label: "DOWNLOAD", path: "/download" },
      { label: "FAQ", path: "/faq" },
    ];

    const go = (path: string) => router.push(path);

    return { items, go, route };
  },
});
</script>

<style scoped>
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  color: #fff;
  z-index: 1000;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo img {
  width: 32px;
  height: 32px;
}

.nav span {
  margin: 0 16px;
  font-size: 22px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}

.nav span .dot {
  color: #e31d24;
  margin-right: 4px;
}

.nav span .active {
  color: #e31d24;
}

.login-btn {
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 6px 16px;
}
</style>
