<template>
  <header class="topbar">
    <!-- LEFT -->
    <div class="logo">Menacing Dashboard & Loader Portal</div>

    <!-- CENTER -->
    <nav class="nav">
      <span
        v-for="item in items"
        :key="item.id"
        :class="{ active: activeSection === item.id }"
        @click="scrollTo(item.id)"
      >
        •{{ item.label }}
      </span>
    </nav>

    <!-- RIGHT -->
    <button class="login-btn">Login</button>
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
  width: 100%;
  height: 64px;
  background: #000;

  display: grid;
  grid-template-columns: minmax(220px, auto) 1fr minmax(140px, auto);
  align-items: center;

  padding-left: 48px;
  padding-right: 48px;
  z-index: 100;
  box-sizing: border-box;
}

/* LEFT */
.logo {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
}

/* CENTER */
.nav {
  display: flex;
  justify-content: center;
  gap: 32px;
}

.nav span {
  color: #fff;
  cursor: pointer;
  font-size: 13px;
}

.nav span.active,
.nav span:hover {
  color: #ff2a2a;
}

/* RIGHT */
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
