<template>
  <div id="app">
    <shopping-cart />
    <the-header />
    <bag-list />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BagList from "./components/BagList.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import TheFooter from "./components/footer.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    BagList,
    ShoppingCart,
    TheFooter,
  },
};
</script>

<style>
#app {
  font-family: "Playfair Display SC", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
