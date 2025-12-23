<template>
  <div id="app">
    <!-- TopBar emits open-login -->
    <TopBar @open-login="showLogin = true" />

    <!-- Your subpages -->
    <router-view />

    <!-- Login Dialog, only visible when showLogin is true -->
    <LoginDialog v-if="showLogin" @close="showLogin = false" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TopBar from "./components/TopBar.vue";
import LoginDialog from "./components/LoginDialog.vue";

export default defineComponent({
  components: { TopBar, LoginDialog },
  setup() {
    const showLogin = ref(false); // must be reactive
    return { showLogin };
  },
});
</script>
