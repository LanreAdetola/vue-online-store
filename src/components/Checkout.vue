<template>
    <div class="checkout">
      <h1>🛒 Checkout</h1>
      <p>Review your order before sending.</p>
  
      <!-- Order Summary -->
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - {{ item.price.toLocaleString() }} XAF (x{{ item.quantity }})
        </li>
      </ul>
      <p>Total: <strong>{{ totalPrice.toLocaleString() }} XAF</strong></p>
  
      <!-- Customer Details Form -->
      <div class="checkout-form">
        <input v-model="customer.name" type="text" placeholder="Full Name" required />
        <input v-model="customer.phone" type="tel" placeholder="Phone Number" required />
        <textarea v-model="customer.address" placeholder="Delivery Address"></textarea>
        <textarea v-model="customer.notes" placeholder="Additional Notes (Optional)"></textarea>
      </div>
  
      <!-- Checkout Buttons -->
      <button @click="sendOrder">Confirm Order via WhatsApp</button>
      <button class="cancel" @click="$router.push('/home')">Back to Store</button>
    </div>
  </template>
  
  <script>
  import { inject, computed, ref } from "vue";
  
  export default {
    setup() {
      const cart = inject("cart");
  
      const customer = ref({
        name: "",
        phone: "",
        address: "",
        notes: ""
      });
  
      const totalPrice = computed(() => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      });
  
      const sendOrder = () => {
        if (!customer.value.name || !customer.value.phone || !customer.value.address) {
          alert("Please fill in all required fields.");
          return;
        }
  
        const orderDetails = cart
          .map(item => `${item.name} - ${item.price.toLocaleString()} XAF (x${item.quantity})`)
          .join("\n");
  
        const message = `New Order:\n\n👤 Name: ${customer.value.name}\n📞 Phone: ${customer.value.phone}\n📍 Address: ${customer.value.address}\n🛒 Items:\n${orderDetails}\n📝 Notes: ${customer.value.notes || "None"}`;
  
        const phoneNumber = "1234567890"; // Replace with your WhatsApp number
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, "_blank");
      };
  
      return { cart, totalPrice, customer, sendOrder };
    }
  };
  </script>
  
  <style scoped>
  .checkout {
    text-align: center;
    padding: 20px;
    max-width: 400px;
    margin: auto;
  }
  
  .checkout-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    width: 100%;
  }
  
  .checkout-form input,
  .checkout-form textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
  }
  
  .checkout-form textarea {
    resize: none;
    height: 50px;
  }
  
  button {
    margin-top: 15px;
    padding: 10px;
    border: none;
    background-color: green;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    width: 100%;
    font-size: 16px;
  }
  
  button.cancel {
    background-color: #ff4d4d;
  }
  
  button:hover {
    opacity: 0.8;
  }
  </style>
  