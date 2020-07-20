<template>
  <row>
    <column :xs="12" :md="12" :lg="12">Pick a Car</column>

    <column :xs="12" :md="4" :lg="3">A</column>
    <column :xs="12" :md="4" :lg="3">B</column>
    <column :xs="12" :md="4" :lg="3">C</column>
  </row>

  <!-- <div>
    <div>
      <Logo />
      <h1>
        pick-a-car
      </h1>
      </div>
    </div>
  </div> -->
</template>

<script lang="ts">
import Vue from 'vue'
import { Row, Column } from 'vue-grid-responsive'

Vue.component('row', Row)
Vue.component('column', Column)

export default Vue.extend({})
</script>

<style></style>
