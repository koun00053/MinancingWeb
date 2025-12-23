<template>
  <div class="home">
    <TopBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopBar from "@/components/TopBar.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    TopBar,
  },
});
</script>

<style scoped>
.home {
  min-height: 100vh;
  background-color: #000;
}
</style>
