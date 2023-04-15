<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="nav-blk">
    <div class="container">
    <header>
    <h1 class="logo-blk">
      <RouterLink :to="{ name: 'home' }">
        <img src="../../src/assets/images/img_pizzaLogo.png" alt="Moon Pizza">
      </RouterLink>
    </h1>
  <nav class="nav-links">
    <RouterLink :to="{ name: 'menu' }">Menu</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <RouterLink :to="{ name: 'admin' }">Admin</RouterLink>
  </nav>
</header>
  </div>
  </div>
</template>