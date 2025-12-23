<template>
  <div class="page">
    <div class="settings-box">
      <div class="avatar-box">
        <img :src="avatarUrl" alt="User Avatar" />
      </div>

      <!-- First row: username -->
      <div class="input-row">
        <span class="icon red">👤</span>
        <input type="text" placeholder="Username" v-model="username" />
      </div>

      <!-- Second row: email -->
      <div class="input-row">
        <span class="icon">📧</span>
        <input type="email" placeholder="Email" v-model="email" />
      </div>

      <!-- Third row: current password -->
      <div class="input-row">
        <span class="icon">🔒</span>
        <input
          type="password"
          placeholder="Current Password"
          v-model="currentPassword"
        />
      </div>

      <!-- Fourth row: new password -->
      <div class="input-row">
        <span class="icon">🔒</span>
        <input
          type="password"
          placeholder="New Password"
          v-model="newPassword"
        />
      </div>

      <!-- Fifth row: confirm password -->
      <div class="input-row">
        <span class="icon">🔒</span>
        <input
          type="password"
          placeholder="Confirm Password"
          v-model="confirmPassword"
        />
      </div>

      <!-- Sixth row: Save button -->
      <div class="button-row">
        <button @click="saveSettings">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsView",
  data() {
    return {
      //avatarUrl: "https://via.placeholder.com/80", // placeholder avatar
      username: "",
      email: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
  },
  methods: {
    saveSettings() {
      // placeholder save function
      console.log("Saved settings", {
        username: this.username,
        email: this.email,
        currentPassword: this.currentPassword,
        newPassword: this.newPassword,
        confirmPassword: this.confirmPassword,
      });
    },
  },
};
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  padding-top: 164px;
  min-height: 100vh;
}

.settings-box {
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: repeat(6, 40px);
  gap: 2px;
  padding: 20px;
  border-radius: 10px;
  width: 360px;
  box-sizing: border-box;
  /* restored border and shadow */
  border: 1px solid #444;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.avatar-box {
  grid-row: 1 / span 2;
  width: 80px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
  background-color: #444;
}

.avatar-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.input-row {
  display: flex;
  align-items: center;
  gap: 10px;
  grid-column: 2 / 3;
}

.input-row input {
  flex: 1;
  height: 32px;
  padding: 0 10px;
  background-color: #2b2e35; /* only input background */
  border: 1px solid #555;
  border-radius: 5px;
  color: #fff;
  outline: none;
}

.input-row input::placeholder {
  color: #aaa;
}

.icon {
  width: 30px;
  text-align: center;
  font-size: 18px;
  color: #fff;
}

.icon.red {
  color: #8b0000;
}

.button-row {
  grid-column: 2 / 3;
  margin-top: 10px;
}

.button-row button {
  width: 100%;
  height: 40px;
  background-color: #8b0000;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}

.button-row button:hover {
  background-color: #e64a19;
}
</style>
