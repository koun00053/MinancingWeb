<template>
  <TopBar />
  <HomeView />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopBar from "./components/TopBar.vue";
import HomeView from "./views/HomeView.vue";

export default defineComponent({
  components: { TopBar, HomeView },
});
</script>
