<!-- eslint-disable vue/multi-word-component-names -->
<template>
 <section class="admin-sec">
      <div class="admin-hdr">
        <h3>Current Orders (5)</h3>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td class="on-blk" colspan="3">
                <strong>Order Number : 1 </strong>
              </td>
              <td>
                <Button class="rm-btn" type="button">&times;</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </section>
</template>