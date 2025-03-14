<template>
  <nav class="navbar">
    <router-link to="/home" class="nav-logo">🛍️ My Store</router-link>
    <div class="nav-links">
      <router-link to="/home">Home</router-link>

      <!-- Cart Dropdown -->
      <div class="cart-container">
        <button class="cart-button" @click="toggleCart">
          🛒 Cart <span class="cart-count" v-if="totalItems">{{ totalItems }}</span>
        </button>
        
        <div v-if="showCart" class="cart-dropdown">
          <p v-if="cart.length === 0">Your cart is empty.</p>
          <ul>
            <li v-for="item in cart" :key="item.id">
              <span>{{ item.name }} (x{{ item.quantity }})</span>
              <span>
                {{ item.price.toLocaleString() }} XAF
                <button class="remove-btn" @click="removeFromCart(item.id)">❌</button>
              </span>
            </li>
          </ul>

          <p v-if="cart.length">Total: {{ totalPrice.toLocaleString() }} XAF</p>
          <button v-if="cart.length" @click="goToCheckout">Proceed to Checkout</button>
          <button v-if="cart.length" @click="clearCart">Clear Cart</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { inject, ref, computed } from "vue";
import { useRouter } from "vue-router"; // ✅ Import Vue Router

export default {
  setup() {
    const cart = inject("cart");
    const showCart = ref(false);
    const router = useRouter(); // ✅ Initialize Vue Router

    const toggleCart = () => {
      showCart.value = !showCart.value;
    };

    const removeFromCart = (productId) => {
      const itemIndex = cart.findIndex(item => item.id === productId);
      if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
          cart[itemIndex].quantity--; 
        } else {
          cart.splice(itemIndex, 1);
        }
      }
    };

    const clearCart = () => {
      cart.length = 0;
    };

    const goToCheckout = () => {
      showCart.value = false; // ✅ Close cart dropdown
      router.push("/checkout"); // ✅ Navigate to checkout page
    };

    const sendOrder = () => {
      const orderText = cart
        .map(item => `${item.name} - ${item.price.toLocaleString()} XAF (x${item.quantity})`)
        .join("\n");

      const phoneNumber = "32466405994"; 
      const whatsappLink = `https://wa.me/${phoneNumber}?text=Order:%0A${encodeURIComponent(orderText)}`;
      window.open(whatsappLink, "_blank");
    };

    const totalPrice = computed(() => {
      return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    });

    const totalItems = computed(() => {
      return cart.reduce((sum, item) => sum + item.quantity, 0);
    });

    return { cart, showCart, toggleCart, removeFromCart, clearCart, goToCheckout, sendOrder, totalPrice, totalItems };
  }
};
</script>


  
  <style scoped>
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 10px 20px;
    position: relative;
  }
  .nav-logo {
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }
  .nav-links {
    display: flex;
    align-items: center;
  }
  .nav-links a {
    margin-left: 20px;
    color: white;
    text-decoration: none;
  }
  .nav-links a:hover {
    text-decoration: underline;
  }
  
  /* Cart Button */
  .cart-container {
    position: relative;
    margin-left: 20px;
  }
  .cart-button {
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    position: relative;
  }
  .cart-count {
    background-color: red;
    color: white;
    padding: 3px 8px;
    border-radius: 50%;
    font-size: 14px;
    margin-left: 5px;
  }
  
  /* Cart Dropdown - Optimized for Mobile */
.cart-dropdown {
  position: absolute;
  right: 0;
  top: 40px;
  background: rgba(255, 255, 255, 0.95); /* Slight transparency */
  color: black;
  width: 200px; /* Smaller width */
  padding: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
}

/* Adjusted Cart List for Better Spacing */
.cart-dropdown ul {
  list-style: none;
  padding: 0;
  width: 100%;
  max-height: 130px;
  overflow-y: auto;
}
.cart-dropdown li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px; /* Slightly smaller text */
  margin: 3px 0;
  padding: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  width: 100%;
}

/* Smaller Remove Button (❌) */
.cart-dropdown .remove-btn {
  background: transparent; /* No background */
  color: red;
  border: none;
  cursor: pointer;
  font-size: 14px; /* Smaller icon */
  padding: 2px 4px; /* Smaller padding */
  transition: color 0.3s ease;
}
.cart-dropdown .remove-btn:hover {
  color: darkred;
}




  </style>
  