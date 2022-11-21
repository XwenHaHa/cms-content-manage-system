import { createApp, App } from 'vue'
import { globalregisterApp } from './global'
import 'normalize.css'
import './assets/css/index.css'

import rootApp from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'

const app: App = createApp(rootApp)

setupStore()
// 注册element-plus/其他
app.use(globalregisterApp)
app.use(router)
app.use(store)

app.mount('#app')
