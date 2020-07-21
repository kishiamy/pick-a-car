<template>
  <div>
    <div v-for="vehicle in vehicles" :key="vehicle.id">
      <Card>
        <div class="heading-card">
          <span>
            {{ vehicle.make }}
          </span>
          <span>
            {{ vehicle.model }}
          </span>
        </div>
        <div class="text-card">
          <span>{{ vehicle.bodyType }},</span>
          <span>{{ vehicle.fuelType }}</span>
        </div>
        <div class="text-card">
          <span>PowerPS: {{ vehicle.enginePowerPS }}</span>
        </div>
        <div class="text-card">
          <span>PowerKW: {{ vehicle.enginePowerKW }}</span>
        </div>
        <div class="text-card">
          <span>Capacity: {{ vehicle.engineCapacity }}</span>
        </div>
      </Card>
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

<style lang="scss" scoped>
.heading-card {
  font: 24px Georgia, sans-serif;
  margin-bottom: 12px;
}
.text-card {
  font: 14px Montserrat, sans-serif;
  margin-bottom: 0.3rem;
}
</style>
