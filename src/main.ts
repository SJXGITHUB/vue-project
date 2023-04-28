import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import './assets/main.css'
import './assets/tailwindcss.css'
import './assets/icon/iconfont.css'
import 'swiper/swiper.css'


const app = createApp(App)
app.use(router)
app.use(VCalendar, {})

app.mount('#app')
