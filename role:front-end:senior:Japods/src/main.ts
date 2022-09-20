// FILE: main.js

import { createApp } from 'vue'
import { Quasar, Dialog, Notify } from 'quasar'
import { createPinia } from 'pinia'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import router from "@/router";

const pinia = createPinia()
const app = createApp(App)

app.use(router);
app.use(Quasar, {
  plugins: { Dialog, Notify }, // import Quasar plugins and add here
})

app.use(pinia)



// Assumes you have a <div id="app"></div> in your index.html
app.mount('#app')