<template>
  <div class="flex-container">
    <div v-for="vehicle in vehicles" :key="vehicle.id">
      <Card image="car3.jpg">
        <div class="heading-card">
          <span> {{ vehicle.make }} {{ vehicle.model }} </span>
        </div>
        <div class="text-card">
          <span>{{ vehicle.bodyType }}, {{ vehicle.fuelType }}</span>
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
    <EmptyItems v-if="(vehicles.length == 0)" item="vehicles" />
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
      vehicles: {},
    }
  },
  async created() {
    let res = await axios.get(
      `http://localhost:8080/api/vehicles?make=${this.$route.query.make}&model=${this.$route.query.model}`
    )
    this.vehicles = res.data

    if (res.status >= 400) {
      this.$router.replace('/error')
    }
  },
})
</script>

<style lang="scss" scoped></style>
