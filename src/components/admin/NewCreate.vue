<template>
  <section class="admin-sec">
      <div class="admin-hdr">
        <h3>Add new pizza</h3>
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" class="form-control">
          </div>
          <div class="form-group">
            <label for="describe">Description</label>
            <textarea  id="describe" rows="2" class="form-control"></textarea>
          </div>
          <span class="op-ttl">
            <strong>Option 1: </strong>
          </span>
          <div class="form-group">
            <label for="size">Size</label>
            <input type="number" id="size" class="form-control">
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input type="number" id="price" class="form-control">
          </div>
          <span class="op-ttl">
            <strong>Option 2: </strong>
          </span>
          <div class="form-group">
            <label for="size2">Size</label>
            <input type="number" id="size2" class="form-control">
          </div>
          <div class="form-group">
            <label for="price2">Price</label>
            <input type="number" id="price2" class="form-control">
          </div>
          <div class="form-group">
            <button class="create-btn">Create</button>
          </div>
        </form>
      </div>
  </section>
</template>