<template>
  <div class="menu-wrapper">
    <div class="menu">
      <h2>Moon handmade pizza</h2>
      <table class="menu-tbl">
        <tbody v-for="(item, index) in pizzaLists" :key="index">
          <tr>
            <td>
              <strong>{{ item.name }}</strong>
            </td>
          </tr>
          <tr>
            <td>
              <small>{{ item.description }}</small>
            </td>
          </tr>
          <tr v-for="(option, index) in item.options" :key="option[index]">
            <td>{{ option.size }}"</td>
            <td>$ {{ option.price }}</td>
            <td>
              <button type="button" @click="AddToBasket(item, option)" class="increment-btn">&#43;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="basket">
      <h2>Your Orders</h2>
      <div>
        <table>
          <tbody v-for="(item, index) in basket" :key="index">
            <tr>
              <td>
                <button class="increment-btn" @click="ToDecreament(item)">&#8722;</button>
                <span>{{ item.quantity }}</span>
                <button class="decrement-btn" @click="ToIncreament(item)">&#43;</button>
              </td>
              <td>{{ item.name }} {{ item.size }}"</td>
              <td>$ {{ (item.price * item.quantity).toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>
        <p>Order total : ${{ GetTotal }}</p>
        <button type="button" class="increment-btn">Place to order</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"
import basketList from "@/composables/basketList.js"
const { AddToBasket, basket, ToDecreament, ToIncreament, GetTotal } = basketList();
let pizzaLists = ref([
  {
    name: "Margherita",
    description: "A delicious tomato based pizza topped with mozzarella.",
    options: [
      { size: 9, price: 6.95 },
      { size: 12, price: 12.95 },
    ]
  },

  {
    name: "Pepperoni",
    description: "A delicious tomato based pizza topped with mozzarella.",
    options: [
      { size: 9, price: 6.95 },
      { size: 12, price: 12.95 },
    ]
  }
]);
</script>