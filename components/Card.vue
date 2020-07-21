<template>
  <div class="card">
    <div class="card-image" />
    <div class="card-content">{{ content }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    content: {
      type: String,
      default: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.card {
  //   display: -ms-flexbox;
  //   display: -webkit-flex;
  //   display: flex;
  //   -webkit-flex-direction: column;
  //   -ms-flex-direction: column;
  //   flex-direction: column;
  //   display: flex;
  //   -webkit-flex-wrap: nowrap;
  //   -ms-flex-wrap: nowrap;
  //   flex-wrap: nowrap;
  //   -webkit-justify-content: space-around;
  //   -ms-flex-pack: space-around;
  //   justify-content: space-around;
  //   -webkit-align-content: space-around;
  //   -ms-flex-line-pack: space-around;
  //   align-content: space-around;
  //   -webkit-align-items: stretch;
  //   -ms-flex-align: stretch;
  //   align-items: stretch;
  border: 1px solid black;
  margin: 1rem 1rem;
  width: 312px;
}
.card-image {
  background-image: url('~assets/car1.jpg');
  background-size: cover;
  width: 312px;
  height: 156px;
}
.card-content {
  padding: 1rem 1rem;
}
</style>
