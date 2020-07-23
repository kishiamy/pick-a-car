<template>
  <div class="card round shadow">
    <img
      :src="require(`@/assets/img/${image}`)"
      class="card-image"
      alt="cardImage"
    />
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Card',
  props: {
    image: {
      type: String,
      default: 'car.jpg',
    },
  },
})
</script>

<style lang="scss" scoped>
/* color name source http://chir.ag/projects/name-that-color/#444444 */
$tundora-approx-color: #444444;
$shadow-color: rgba($tundora-approx-color, 0.6);

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
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    box-shadow: 0 5px $shadow-color;
    transform: translateY(4px);
  }
}
.card-image {
  background-size: cover;
  width: 312px;
  height: 156px;
}
.card-content {
  font: 14px Montserrat, sans-serif;
  padding: 1rem 1rem;
  margin-bottom: 0.3rem;
}
.shadow {
  -moz-box-shadow: 5px 5px 5px $shadow-color;
  -webkit-box-shadow: 5px 5px 5px $shadow-color;
  box-shadow: 5px 5px 5px $shadow-color;
}
.round {
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  overflow: hidden;
}
.heading-card {
  font: 24px Georgia, sans-serif;
  margin-bottom: 12px;
}
.text-card {
  margin-bottom: 0.3rem;
}
</style>
