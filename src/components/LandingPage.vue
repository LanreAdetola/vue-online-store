<template>
    <div class="landing">
      <h1>{{ $t('selectLanguage') }}</h1>
      <button @click="setLanguage('en')">English</button>
      <button @click="setLanguage('fr')">Français</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      setLanguage(lang) {
        localStorage.setItem('lang', lang);
        this.$i18n.locale = lang;
        this.$router.push('/home'); // Redirect to HomePage
      },
    },
  };
  </script>
  
  <style scoped>
  .landing {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
  }
  </style>
  