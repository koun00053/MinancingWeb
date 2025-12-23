<template>
  <div class="overlay" @click.self="closeDialog">
    <div class="login-dialog">
      <button class="close-btn" @click="closeDialog">✖</button>
      <h2 class="title">Login</h2>
      <div class="title-underline"></div>

      <div class="input-row">
        <span class="icon">👤</span>
        <input type="text" placeholder="Username" v-model="username" />
      </div>

      <div class="input-row">
        <span class="icon">🔒</span>
        <input type="password" placeholder="Password" v-model="password" />
      </div>

      <div class="forgot-password">
        Forgot password?
        <span class="link" @click="recoverPassword">Recover</span>
      </div>

      <button class="login-submit" @click="login">LOG IN</button>

      <div class="register">
        No account? <span class="link" @click="register">Register</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LoginDialog",
  emits: ["close"],
  setup(_, { emit }) {
    const username = ref("");
    const password = ref("");

    const closeDialog = () => emit("close");
    const login = () => console.log("Login", username.value, password.value);
    const recoverPassword = () => console.log("Recover");
    const register = () => console.log("Register");

    return {
      username,
      password,
      closeDialog,
      login,
      recoverPassword,
      register,
    };
  },
});
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 120px;
  z-index: 1000;
}

.login-dialog {
  width: 360px;
  background: #151515;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}

.title {
  color: #fff;
  text-align: center;
  margin: 0;
}
.title-underline {
  width: 60px;
  height: 2px;
  background: #e31d24;
  margin: 5px auto 15px auto;
}

.input-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.input-row input {
  flex: 1;
  height: 35px;
  padding: 0 10px;
  background: #2b2e35;
  border: 1px solid #555;
  border-radius: 5px;
  color: #fff;
}

.icon {
  width: 30px;
  text-align: center;
  font-size: 18px;
  color: red;
}

.forgot-password {
  text-align: right;
  font-size: 12px;
  color: #fff;
}
.forgot-password .link {
  color: #e31d24;
  cursor: pointer;
  text-decoration: underline;
}

.login-submit {
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: none;
  background: #e31d24;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
.login-submit:hover {
  background: darkred;
}

.register {
  text-align: center;
  font-size: 12px;
  color: #fff;
}
.register .link {
  color: #e31d24;
  cursor: pointer;
  text-decoration: underline;
}
</style>
