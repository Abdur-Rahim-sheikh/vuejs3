import { createApp } from 'vue';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import router from './router.js';
const app = createApp(App);
app.use(router);
app.component('base-modal', BaseModal);
router.isReady().then(() => {
    app.mount('#app');
})
// app.mount('#app');
