<template>
  <section>
    <ul>
      <product-item v-for="prod in products" :key="prod.id" :product="prod"></product-item>
    </ul>
  </section>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue';

export default {
  inject: ['products'],
  components: {
    ProductItem,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>