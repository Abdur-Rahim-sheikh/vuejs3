<script>
import ProductItem from '../components/products/ProductItem.vue';
import { mapGetters } from 'vuex';
export default {

  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters(['products']),
  },
};
</script>

<template>
  <section>
    <ul>
      <product-item v-for="prod in products" :key="prod.id" :product="prod"></product-item>
    </ul>
  </section>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>