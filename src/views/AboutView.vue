<script setup>
</script>
<template>
  <div class="about">
    <section class="intro">
      <div class="info-txt-blk">
        <h2>Quality pizza for 30 years</h2>
        <p class="info-txt">Nothing but the best quality ingredients, with a friendly atmosphere.</p>
      </div>
      <img src="../assets/images/img_pizza02.jpg" class="info-img" alt="Pizza background">
    </section>
    <section class="more-info">
        <h3>See More</h3>
        <nav>
          <ul>
            <li>
              <RouterLink :to="{ name:'history'} ">History</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name:'location'} ">Location</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name:'delivery'} ">Delivery</RouterLink>
            </li>
          </ul>
        </nav>
        <RouterView/>
    </section>
  </div>
</template>

<style>

</style>
