<template>
  <div class="store">
    <h1>{{ $t('welcome') }}</h1>
    <p>{{ $t('storeMessage') }}</p>

    <!-- Category Tabs -->
    <div class="tabs">
      <button 
        v-for="category in categories" 
        :key="category"
        :class="{ active: category === selectedCategory }"
        @click="selectedCategory = category">
        {{ category }}
      </button>
    </div>

    <!-- Product List -->
    <div class="product-list">
      <div v-for="product in filteredProducts" :key="product.id" class="product">
        <img :src="product.image" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price.toLocaleString() }} XAF</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref, computed } from "vue";
import products from "../data/products.js";

export default {
  setup() {
    const cart = inject("cart"); 
    const selectedCategory = ref("Necklaces");

    const categories = [...new Set(products.map(product => product.category))];

    const filteredProducts = computed(() => {
      return products.filter(product => product.category === selectedCategory.value);
    });

    const addToCart = (product) => {
      const existingItem = cart.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++; // Increase quantity if item already exists
      } else {
        cart.push({ ...product, quantity: 1 }); // Add item with initial quantity
      }
    };

    return { products, categories, selectedCategory, filteredProducts, addToCart };
  }
};
</script>


<style scoped>

/* Category Tabs - Clean UI */
.tabs {
  display: flex;
  justify-content: center;
  overflow-x: auto;
  margin-bottom: 15px;
}
.tabs button {
  background: #ddd;
  border: none;
  padding: 8px 12px;
  margin: 5px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  transition: 0.3s;
}
.tabs button.active {
  background: #333;
  color: white;
}

/* Product Grid - Responsive */
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  padding: 10px;
}
.product {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  background: white;
  border-radius: 8px;
}
.product img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}




</style>
