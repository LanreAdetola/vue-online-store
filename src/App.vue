<template>
  <NavBar />
  <router-view />
</template>

<script>
import { reactive, provide, watchEffect } from "vue";
import NavBar from "./components/NavBar.vue";

export default {
  components: { NavBar },
  setup() {
    // Load cart from localStorage OR initialize an empty array
    const cart = reactive(
      JSON.parse(localStorage.getItem("cart")) || []
    );

    // Watch the cart and update localStorage whenever it changes
    watchEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    });

    provide("cart", cart); // Provide cart to all components

    return { cart };
  }
};
</script>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
