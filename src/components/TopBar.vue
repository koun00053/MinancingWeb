<template>
  <header class="topbar">
    <!-- LEFT -->
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="Logo" class="logo-img" />
      <span class="logo-text">Menacing Dashboard & Loader Portal</span>
    </div>

    <!-- CENTER -->
    <nav class="nav">
      <span
        v-for="item in items"
        :key="item.id"
        :class="{ active: activeSection === item.id }"
        @click="scrollTo(item.id)"
        class="nav-item"
      >
        <span class="dot">•</span>
        <span class="label">{{ item.label }}</span>
      </span>
    </nav>

    <!-- RIGHT -->
    <button class="login-btn">LOGIN</button>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "TopBar",
  setup() {
    const activeSection = ref<string>("");

    const items = [
      { id: "subscriptions", label: "SUBSCRIPTIONS" },
      { id: "settings", label: "SETTINGS" },
      { id: "referrer", label: "REFERRER" },
      { id: "download", label: "DOWNLOAD" },
      { id: "faq", label: "FAQ" },
    ];

    const scrollTo = (id: string) => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
      activeSection.value = id;
    };

    const onScroll = () => {
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          activeSection.value = item.id;
          break;
        }
      }
    };

    onMounted(() => window.addEventListener("scroll", onScroll));
    onUnmounted(() => window.removeEventListener("scroll", onScroll));

    return { items, scrollTo, activeSection };
  },
});
</script>

<style scoped>
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: #000;
  display: grid;
  grid-template-columns: minmax(220px, auto) 1fr minmax(140px, auto);
  align-items: center;
  padding: 0 48px;
  z-index: 100;
  box-sizing: border-box;
}

/* Logo + title */
.logo-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.logo-text {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}

/* Nav items */
.nav {
  display: flex;
  justify-content: center;
  gap: 32px;
}

.nav-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 22px;
}

/* Dot is always red */
.nav-item .dot {
  color: #ff2a2a;
}

/* Label text changes on hover/active */
.nav-item .label {
  color: #fff;
  transition: color 0.2s;
}

.nav-item.active .label,
.nav-item:hover .label {
  color: #ff2a2a;
}

/* Login button */
.login-btn {
  justify-self: end;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 6px 18px;
  font-size: 13px;
  cursor: pointer;
  margin-right: 8px; /* safe margin */
}
</style>
