<template>
    <footer class="footer">
      <div class="footer-links">
        <router-link to="/about">About Us</router-link>
        <router-link to="/refunds">Refund Policy</router-link>
        <router-link to="/delivery">Delivery Information</router-link>
      </div>
      <p>&copy; 2024 The Elegant Gem. All Rights Reserved.</p>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 15px;
    width: 100%;
    margin-top: auto; /* Ensures footer moves to bottom */
  }
  .footer-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 10px;
  }
  .footer-links a {
    color: white;
    text-decoration: none;
    font-size: 14px;
  }
  .footer-links a:hover {
    text-decoration: underline;
  }
  </style>
  