import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.scss'
import 'bootstrap'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-brands-svg-icons'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/vue-fontawesome'

// createApp(App).mount('#app')

const app = createApp(App)

app.use(router)

app.mount('#app')
