<template>
  <div>
    <div>
      <h1>
        Pick a Car
      </h1>
    </div>

    <div class="flex-container">
      <Make />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Make from 'components/Make.vue'

export default Vue.extend({})
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

// .flex-item {
//   display: -ms-flexbox;
//   display: -webkit-flex;
//   display: flex;
//   -webkit-order: 0;
//   -ms-flex-order: 0;
//   order: 0;
//   -webkit-flex: 0 1 auto;
//   -ms-flex: 0 1 auto;
//   flex: 0 1 auto;
//   -webkit-align-self: center;
//   -ms-flex-item-align: center;
//   align-self: center;
// }
</style>
