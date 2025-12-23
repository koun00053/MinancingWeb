<template>
  <div class="page">
    <div class="summary-wrapper">
      <h1>SUMMARY</h1>
      <p>
        This dashboard allows you to manage subscriptions, settings, referrals
        and downloads.
      </p>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding-top: 96px;
  min-height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
}

.summary-wrapper {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px; /* space between SUMMARY and sub text */
}

.summary-wrapper h1 {
  font-size: 32px;
  margin: 0;
}

.summary-wrapper p {
  font-size: 18px;
  margin: 0;
}
</style>
