<script setup>
import { RouterView } from 'vue-router'
import AppHeader from "./components/AppHeader.vue"

</script>

<template>
  <section class="nav-sec">
    <AppHeader />
  </section>
  <RouterView />
  <!-- only when you want to show those components only in a home page, you can define multiple components in the route -->
  <div class="info-block-wrapper">
    <RouterView name="history"/>
    <RouterView name="delivery"/>
  </div> 

</template>

<style scoped>

</style>
