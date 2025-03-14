import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    welcome: "Welcome to our Store",
    selectLanguage: "Select Language",
    storeMessage: "Explore our amazing collection of jewelry!",
  },
  fr: {
    welcome: "Bienvenue dans notre magasin",
    selectLanguage: "Sélectionnez la langue",
    storeMessage: "Découvrez notre incroyable collection de bijoux!",
  },
};


const i18n = createI18n({
  legacy: false, // Required for Vue 3 composition API
  locale: localStorage.getItem('lang') || 'en', // Default language (checks localStorage)
  messages,
});

export default i18n;
