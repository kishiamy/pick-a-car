<template>
  <div>
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
    <EmptyItems v-if="(models.length == 0)" item="models" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Card from 'components/Card.vue'
import EmptyItems from 'components/EmptyItems.vue'

export default Vue.extend({
  data() {
    return {
      models: [],
    }
  },
  async created() {
    let res = await axios.get(
      `http://localhost:8080/api/models?make=${this.$route.query.make}`
    )
    this.models = res.data

    if (res.status >= 400) {
      this.$router.replace('/error')
    }
  },
})
</script>

<style lang="scss" scoped></style>
