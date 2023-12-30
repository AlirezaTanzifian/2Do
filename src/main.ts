import { createApp } from 'vue'
import 'ant-design-vue/dist/reset.css'
import '../src/assets/css/main.css'
import App from './App.vue'
import Antd from "ant-design-vue";

import { createPinia } from "pinia";

const pinia = createPinia()
const app = createApp(App)

app.use(Antd)
app.use(pinia)
app.mount('#app')
