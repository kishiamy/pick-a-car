<template>
  <div class="card round shadow">
    <!-- <div class="card-image"> -->
    <img src="~/assets/car1.jpg" class="card-image" alt="cardImage" />
    <!-- </div> -->
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  //   props: {
  //     content: {
  //       type: String,
  //     },
  // image: {
  //   type: String,
  // },
  //   },
})
</script>

<style lang="scss" scoped>
.card {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: space-around;
  -ms-flex-pack: space-around;
  justify-content: space-around;
  -webkit-align-content: space-around;
  -ms-flex-line-pack: space-around;
  align-content: space-around;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;

  margin: 1rem 1rem;
  width: 312px;
}
.card-image {
  //   background-image: url('~assets/car1.jpg');
  background-size: cover;
  width: 312px;
  height: 156px;
  //   display: -ms-flexbox;
  //   display: -webkit-flex;
  //   display: flex;
}
.card-content {
  padding: 1rem 1rem;
}
.shadow {
  -moz-box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
  -webkit-box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
}
.round {
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  overflow: hidden;
}
</style>
