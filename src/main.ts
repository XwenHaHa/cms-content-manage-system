import { createApp, App } from 'vue'
import { globalregisterApp } from './global'

import rootApp from './App.vue'
import router from './router'
import store from './store'
import hjRequest from './service'

const app: App = createApp(rootApp)

// 注册element-plus/其他
app.use(globalregisterApp)
app.use(router)
app.use(store)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

interface HJData {
  data: any
  returnCode: string
  success: boolean
}

hjRequest
  .get<HJData>({
    url: '/home/multidata',
    showLoading: true
  })
  .then((res) => {
    const { data } = res
    console.log(data)
  })
