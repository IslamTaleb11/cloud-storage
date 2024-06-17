import './assets/main.css'
import AnimateOnScroll from 'primevue/animateonscroll';
import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';

import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(createPinia())
app.use(router)
app.use(MotionPlugin)
app.use(ConfirmationService);
app.use(ToastService);

// app.directive('animateonscroll', AnimateOnScroll);

app.mount('#app')
