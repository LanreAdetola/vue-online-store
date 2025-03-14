import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Import Vue Router
import i18n from './i18n';      // Import Vue I18n

const app = createApp(App);

app.use(router); // Use Vue Router
app.use(i18n);   // Use Vue I18n

app.mount('#app');
