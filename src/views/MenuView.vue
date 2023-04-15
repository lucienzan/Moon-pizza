<template>
  <div class="menu-wrapper">
      <div class="menu">
        <h2>Moon handmade pizza</h2>
        <table class="menu-tbl">
          <tbody>
            <tr>
              <td>
                <strong>Margheria</strong>
              </td>
            </tr>
            <tr>
              <td>
                <small>A delicious tomato based pizza topped with mozzarella</small>
              </td>
            </tr>
            <tr>
              <td>9"</td>
              <td>$7.9</td>
              <td>
                <button>&#43;</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="basket">
        <h2>Your Orders</h2>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <button class="increment-btn">&#8722;</button>
                  <span>1</span>
                  <button class="decrement-btn">&#43;</button>
                </td>
                <td>Margeherita 9"</td>
                <td>$ 7.4</td>
              </tr>
            </tbody>
          </table>
          <p>Order total : $87</p>
          <button>Place to order</button>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  setup() {
    
  }
  }
</script>