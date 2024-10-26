import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';

import en from './locales/en.json';
import fr from './locales/fr.json';

const i18n = createI18n({
  legacy: false,
  locale: navigator.language,
  // locale: 'en',
  fallbackLocale: 'en',
  messages: { en, fr },
});

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .mount('#app');
