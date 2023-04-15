<script setup>
import { RouterView } from 'vue-router'
import  AppHeader  from "./components/AppHeader.vue"
</script>

<template>
  <section class="nav-sec">
    <AppHeader />
  </section>
  <RouterView />
</template>

<style scoped>

</style>
