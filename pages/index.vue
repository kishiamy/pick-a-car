<template>
  <div>
    <h1>
      pick-a-car
    </h1>

    <div class="flex-container">
      <div v-for="car in cars" :key="car.id">
        <div class="flex-item cars">{{ car }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

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

<style lang="scss" scoped>
.flex-container {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.flex-item {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
}
</style>
