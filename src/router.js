import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "./components/LandingPage.vue";
import HomePage from "./components/HomePage.vue";
import Checkout from "./components/Checkout.vue"; // Import checkout page
import AboutUs from "./components/AboutUs.vue";
import Refunds from "./components/Refunds.vue";
import Delivery from "./components/Delivery.vue";



const routes = [
  { path: "/", component: LandingPage },
  { path: "/home", component: HomePage },
  { path: "/checkout", component: Checkout }, // New checkout route
  { path: "/about", component: AboutUs },
  { path: "/refunds", component: Refunds },
  { path: "/delivery", component: Delivery },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
