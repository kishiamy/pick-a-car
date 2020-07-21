<template>
  <div>
    <div v-for="vehicle in vehicles" :key="vehicle.make">
      <Card :content="vehicle" />
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
      vehicles: {},
    }
  },
  async created() {
    try {
      let res = await axios.get(
        `http://localhost:8080/api/vehicles?make=${this.$route.query.make}&model=${this.$route.query.model}`
      )

      this.vehicles = res.data
    } catch (e) {
      console.error(e)
    }
  },
})
</script>

<style scoped></style>
