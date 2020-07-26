<template>
  <div class="no-results">
    <h1>No {{ item }} available</h1>
    <nuxt-link v-show="noMakes" to="/" class="no-link-styles"
      >Back to Home page</nuxt-link
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'EmptyItems',
  props: {
    item: {
      type: String,
      default: '',
    },
  },
  computed: {
    noMakes() {
      return this.item !== 'makes'
    },
  },
})
</script>

<style scoped></style>
