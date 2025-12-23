<template>
  <header class="topbar">
    <div class="logo">DEADLOCK</div>

    <nav class="nav">
      <a href="#">Game</a>
      <a href="#">News</a>
      <a href="#">Community</a>
    </nav>

    <button class="login-btn">Login</button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TopBar",
});
</script>

<style scoped>
.topbar {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 32px;
  background-color: #000;
  color: #fff;
}

.logo {
  font-size: 20px;
  font-weight: bold;
}

.nav a {
  margin: 0 16px;
  color: #aaa;
  text-decoration: none;
  font-size: 14px;
}

.nav a:hover {
  color: #fff;
}

.login-btn {
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 6px 16px;
  cursor: pointer;
}

.login-btn:hover {
  background: #fff;
  color: #000;
}
</style>
