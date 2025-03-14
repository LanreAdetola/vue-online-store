import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "./components/LandingPage.vue";
import HomePage from "./components/HomePage.vue";
import Checkout from "./components/Checkout.vue"; // Import checkout page

const routes = [
  { path: "/", component: LandingPage },
  { path: "/home", component: HomePage },
  { path: "/checkout", component: Checkout } // New checkout route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
