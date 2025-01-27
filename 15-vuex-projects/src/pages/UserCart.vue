<script>
import CartItem from '../components/cart/CartItem.vue';
import { mapGetters } from 'vuex'
export default {

  components: {
    CartItem,
  },
  computed: {
    cartTotal() {
      return this.cart.total.toFixed(2);
    },
    ...mapGetters(['cart'])
  }
};
</script>

<template>
  <section>
    <h2>Your Cart</h2>
    <h3>Total Amount: <base-badge mode="elegant">${{ cartTotal }}</base-badge></h3>
    <ul>
      <cart-item v-for="item in cart.items" :key="item.productId" :item="item"></cart-item>
    </ul>
  </section>
</template>



<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>