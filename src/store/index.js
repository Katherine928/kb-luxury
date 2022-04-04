import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bags: [
      {
        name: "PAPILLON",
        image: require("../assets/bag1.jpg"),
        price: 2710,
        cart: false,
      },
      {
        name: "FAVORITE",
        image: require("../assets/bag2.jpg"),
        price: 3250,
        cart: false,
      },
      {
        name: "PALAIS",
        image: require("../assets/bag3.jpg"),
        price: 2840,
        cart: false,
      },
      {
        name: "POCHETTE",
        image: require("../assets/bag4.jpg"),
        price: 2990,
        cart: false,
      },
      {
        name: "MARELLE",
        image: require("../assets/bag5.jpg"),
        price: 3000,
        cart: false,
      },
      {
        name: "ONTHEGO",
        image: require("../assets/bag6.jpg"),
        price: 3950,
        cart: false,
      },
      {
        name: "ALMA",
        image: require("../assets/bag7.jpg"),
        price: 2370,
        cart: false,
      },
      {
        name: "BUCI",
        image: require("../assets/bag8.jpg"),
        price: 4200,
        cart: false,
      },
      {
        name: "MARELLE",
        image: require("../assets/bag9.jpg"),
        price: 2230,
        cart: false,
      },
    ],
    bagsInShoppingBag: [],
  },
  getters: {},
  mutations: {
    addToShoppingCart(state, bag) {
      state.bagsInShoppingBag.push(bag);
    },
    deleteFromCart(state, bag) {
      state.bagsInShoppingBag = state.bagsInShoppingBag.filter((item) => {
        return item != bag;
      });
    },
  },
  actions: {},
  modules: {},
});
