<template>
    <div class="cart">
      <h2>🛒 Shopping Cart</h2>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - {{ item.price.toLocaleString() }} XAF
          <button @click="removeFromCart(item.id)">Remove</button>
        </li>
      </ul>
      <button v-if="cart.length" @click="sendOrder">Send Order via WhatsApp</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cart: Array,
    },
    methods: {
      removeFromCart(productId) {
        this.$emit("remove", productId); // Emit event to remove item
      },
      sendOrder() {
        const orderText = this.cart
          .map(item => `${item.name} - ${item.price.toLocaleString()} XAF`)
          .join("\n");
  
        const phoneNumber = "1234567890"; // Replace with your WhatsApp number
        const whatsappLink = `https://wa.me/${phoneNumber}?text=Order:%0A${encodeURIComponent(orderText)}`;
        window.open(whatsappLink, "_blank");
      }
    }
  };
  </script>
  
  <style scoped>
  .cart {
    margin-top: 20px;
    text-align: center;
  }
  button {
    cursor: pointer;
    margin: 5px;
  }
  </style>
  