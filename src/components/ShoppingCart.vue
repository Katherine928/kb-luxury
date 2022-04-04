<template>
  <div class="shoppingCart">
    <div class="notification" v-on:click="showCart">
      <ion-icon name="bag-handle-outline"></ion-icon>
      <span class="shppingBag">{{ bagsInShoppingBag.length }}</span>
    </div>
    <div class="cart" v-if="this.showForm == true">
      <h1>
        YOUR SHOPPING BAG
        <p>({{ bagsInShoppingBag.length }})</p>
        <button class="btn1" v-on:click="showCart">
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </h1>
      <hr />
      <div
        class="container"
        v-for="bag in bagsInShoppingBag"
        v-bind:key="bag.name"
      >
        <img v-bind:src="bag.image" alt="" />
        <article class="description">
          <h2>{{ bag.name }}</h2>
          <p>$ {{ bag.price }}</p>
        </article>
        <button class="btn2" v-on:click="deleteBag(bag)">
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
      <hr />
      <h1 class="total">TOTAL</h1>
      <h1 class="total-price">$ {{ total }}</h1>
      <button class="btn3">CHECK OUT</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopping-cart",
  data() {
    return {
      showForm: false,
    };
  },
  computed: {
    bagsInShoppingBag() {
      return this.$store.state.bagsInShoppingBag;
    },
    total() {
      let sum = 0;
      this.$store.state.bagsInShoppingBag.forEach((bag) => {
        sum += bag.price;
      });
      return sum;
    },
  },
  methods: {
    deleteBag(bag) {
      this.$store.commit("deleteFromCart", bag);
    },
    showCart() {
      if (this.showForm == true) {
        this.showForm = false;
      } else {
        this.showForm = true;
      }
    },
  },
};
</script>

<style scoped>
.notification {
  display: inline;
  float: right;
  padding: 0 2rem;
  position: relative;
  cursor: pointer;
}
ion-icon {
  height: 1.5em;
  width: 1.5em;
}
span {
  font-size: 0.8em;
  height: 1.5em;
  width: 1.5em;
  border-radius: 100%;
  background-color: rgb(0, 0, 0);
  color: white;
  position: absolute;
  top: -0.5em;
  right: 1.1em;
}
.cart {
  min-height: 100vh;
  background-color: rgba(231, 230, 230, 0.35);
  width: 30%;
  float: right;
}
.cart p {
  display: inline;
  font-size: 0.5em;
}
img {
  width: 25%;
  float: left;
  display: inline;
  padding: 10px 50px;
}
.container {
  width: 100%;
  display: block;
  margin-bottom: 50px;
}
.description {
  text-align: left;
  padding-top: 80px;
  display: block;
}
.description h2 {
  font-size: 1.25em;
  font-weight: 700;
  margin-bottom: 0;
}
.description p {
  font-size: 1em;
  font-weight: 700;
}
.btn1 {
  margin-left: 120px;
  font-size: 1em;
  border: 0px;
  background-color: rgba(231, 230, 230, 0);
  cursor: pointer;
}
.btn2 {
  margin-left: 120px;
  border: 0px;
  font-size: 1.5em;
  background-color: rgba(231, 230, 230, 0);
  cursor: pointer;
}
.total {
  display: inline-block;
  margin-right: 400px;
}
.total-price {
  display: inline-block;
}
.btn3 {
  display: block;
  width: 70%;
  padding: 20px 0;
  margin: 0 auto;
  background-color: black;
  color: white;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>
