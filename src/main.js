import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

// Importa Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Importa Bootstrap JS (incluye Popper.js)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


createApp(App).use(router).mount('#app')
//createApp(App).mount('#app')
