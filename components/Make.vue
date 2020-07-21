<template>
  <div>
    <div v-for="car in cars" :key="car.id">
      <Card :content="car" />
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
      cars: {},
    }
  },
  async created() {
    try {
      let res = await axios.get(`http://localhost:8080/api/makes`)

      this.cars = res.data
    } catch (e) {
      console.error(e)
    }
  },
})
</script>

<style lang="scss" scoped></style>
