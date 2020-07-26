<template>
  <div>
    <div class="flex-container">
      <div class="search-wrapper">
        <input type="text" v-model="search" placeholder="Search..." />
      </div>
    </div>
    <!-- <Search :filterList="makes" /> -->
    <div class="flex-container">
      <div v-for="make in filterList" :key="make.id">
        <nuxt-link
          :to="{ path: 'model', query: { make: make } }"
          class="no-link-styles"
        >
          <Card>{{ make }}</Card>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Card from 'components/Card.vue'
// import Search from 'components/Search.vue'

export default Vue.extend({
  name: 'Make',
  data() {
    return {
      makes: [],
      search: '',
    }
  },
  computed: {
    filterList(): any {
      return this.makes.filter((m: any) => {
        return m.toLowerCase().includes(this.search.toLowerCase())
      })
    },
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

<style lang="scss" scoped>
.no-link-styles {
  text-decoration: none;
  color: inherit;
}
</style>
