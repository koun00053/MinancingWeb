<template>
  <div class="homeview-wrapper">
    <main class="page">
      <!-- SUMMARY -->
      <section class="summary">
        <h1>SUMMARY</h1>
        <p>
          This portal allows you to manage subscriptions, settings, referrals,
          downloads, and FAQs in one place.
        </p>
      </section>

      <section id="subscriptions" class="block">SUBSCRIPTIONS</section>
      <section id="settings" class="block">SETTINGS</section>
      <section id="referrer" class="block">REFERRER</section>
      <section id="download" class="block">DOWNLOAD</section>
      <section id="faq" class="block">FAQ</section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "HomeView",
  setup() {
    // Add body class to ensure scrollbar gutter is black
    onMounted(() => document.body.classList.add("homeview-active"));
    onUnmounted(() => document.body.classList.remove("homeview-active"));
  },
});
</script>

<style scoped>
.homeview-wrapper {
  padding-top: 64px;
  background-color: #000;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
}

.page {
  color: #fff;
  padding-top: 64px; /* offset for fixed TopBar */
}

.summary {
  height: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.summary h1 {
  font-size: 36px;
  margin-bottom: 16px;
}

.summary p {
  color: #aaa;
  max-width: 600px;
}

.block {
  height: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  border-top: 1px solid #222;
}
</style>
