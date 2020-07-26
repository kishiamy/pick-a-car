<template>
  <div class="flex-container error-container">
    <div class="error">
      <div v-if="error.statusCode === 404" class="error-text">
        <h1>404</h1>
        <h1>Page not found</h1>
        <nuxt-link to="/">Back to Home page</nuxt-link>
      </div>

      <div v-else>
        <h1>{{ error.statusCode }}, An error occurred</h1>
        <a href="/" @click="reload" class="no-link-styles">Refresh page</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'basic',
  props: ['error'],
  methods: {
    reload() {
      if (window.location) {
        window.location.reload()
      }
    },
  },
})
</script>

<style lang="scss" scoped>
$breaker-bay-approx: #5f9ea0;

.error-container {
  height: 100vh;
}
.error {
  text-align: center;
  font: 24px Montserrat, sans-serif;
  margin-bottom: 5rem;
  color: $breaker-bay-approx;
}
.nuxt-link-active,
.no-link-styles {
  color: black;
}
</style>
