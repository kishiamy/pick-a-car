<template>
  <div class="flex-container">
    <div v-for="model in models" :key="model">
      <nuxt-link
        :to="{
          path: 'vehicles',
          query: { make: $route.query.make, model: model },
        }"
        class="no-link-styles"
      >
        <Card image="car2.jpg">{{ model }}</Card>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Card from 'components/Card.vue'

export default Vue.extend({
  data() {
    return {
      models: [],
    }
  },
  async created() {
    try {
      let res = await axios.get(
        `http://localhost:8080/api/models?make=${this.$route.query.make}`
      )

      this.models = res.data
    } catch (e) {
      console.error(e)
    }
  },
  //   asyncData({ params }) {
  //     return axios
  //       .get(`http://localhost:8080/api/models?make=${params}`)
  //       .then((res) => {
  //         return { models: res.data.models }
  //       })
  //   },
})
</script>

<style lang="scss" scoped>
.no-link-styles {
  text-decoration: none;
  color: inherit;
}
</style>
