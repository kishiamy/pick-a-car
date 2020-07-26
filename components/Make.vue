<template>
  <div class="flex-container">
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
    <EmptyItems v-if="(makes.length == 0)" item="makes" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Card from 'components/Card.vue'
import EmptyItems from 'components/EmptyItems.vue'

export default Vue.extend({
  name: 'Make',
  data() {
    return {
      makes: [],
      search: '',
    }
  },
  async created() {
    let res = await axios.get(`http://localhost:8080/api/makes`)
    this.makes = res.data

    if (res.status >= 400) {
      console.log(res)
      this.$router.replace('/error')
    }
  },
})
</script>

<style lang="scss" scoped></style>
