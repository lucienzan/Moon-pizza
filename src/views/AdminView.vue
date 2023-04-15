<template>
  <section class="container">
      <div class="creation-blk">
        <NewCreate class="create-form" />
        <div>
        <PizzaLists class="pizza-lists"/>
        <Orders class="pizza-lists"/>
        </div>
      </div>
  </section>
</template>
<script>
import NewCreate from '../components/admin/NewCreate.vue';
import PizzaLists from '../components/admin/PizzaLists.vue';
import Orders from '../components/admin/Orders.vue';

export default {
    setup() {
    },
  components: {
    NewCreate,
    PizzaLists,
    Orders
  }
}
</script>

<style>
</style>