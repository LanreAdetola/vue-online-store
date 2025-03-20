<template>
  <div class="app-container">
    <NavBar />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import { reactive, provide, watchEffect } from "vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { NavBar, Footer },
  setup() {
    const cart = reactive(JSON.parse(localStorage.getItem("cart")) || []);

    watchEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    });

    provide("cart", cart);

    return { cart };
  }
};
</script>

<style scoped>
/* Ensure full height layout */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full viewport height */
}

/* Content grows to push footer down */
.content {
  flex: 1;
}

/* Footer Styling */
.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 15px;
  width: 100%;
  margin-top: auto;
}

/* ✅ Keep the Logo Styling */
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
