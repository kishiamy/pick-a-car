<template>
  <div class="flex-container">
    <div v-for="make in makes" :key="make.id">
      <nuxt-link
        :to="{ path: 'model', query: { make: make } }"
        class="no-link-styles"
      >
        <Card>{{ make }}</Card>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Card from 'components/Card.vue'

export default Vue.extend({
  name: 'Make',
  data() {
    return {
      makes: [],
    }
  },
  async created() {
    try {
      let res = await axios.get(`http://localhost:8080/api/makes`)
      this.makes = res.data
    } catch (e) {
      console.error(e)
    }
  },
})
</script>

<style lang="scss" scoped>
.no-link-styles {
  text-decoration: none;
  color: inherit;
}
</style>
