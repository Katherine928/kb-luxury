<template>
  <div>
    <form action="#" class="search">
      <input type="text" class="search_input" placeholder="Search Bags..." />
      <button class="search_button">
        <ion-icon class="search_icon" name="search-outline"></ion-icon>
      </button>
    </form>
    <div class="container">
      <bag-card v-for="bag in bags" v-bind:key="bag.name" v-bind:bag="bag" />
    </div>
  </div>
</template>

<script>
import BagCard from "./BagCard.vue";
export default {
  name: "bag-list",
  components: {
    BagCard,
  },

  computed: {
    bags() {
      return this.$store.state.bags;
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 50px;
  padding: 10px 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  column-gap: 65px;
  row-gap: 75px;
}
.search {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  margin-top: 30px;
}
.search_input {
  font-size: 0.8em;
  color: #a3a2a2;
  background-color: #f4f2f2;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 100px;
  width: 50%;
  margin-right: -3rem;
  transition: all 0.2s;
}
.search_input:focus {
  outline: none;
  width: 100%;
  background-color: #f0eeee;
}
.search_button {
  border: none;
  background-color: #f4f2f2;
}
.search_icon {
  height: 1rem;
  width: 1rem;
  fill: #999;
}
</style>
