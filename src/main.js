import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'ant-design-vue/dist/antd.css'; //
import Antd from 'ant-design-vue'
import store from './store'

window.onerror = function(e){
  console.log(['https://stackoverflow.com/search?q=[js]+'+e])
}
const app = createApp(App)
app.use(router).use(store).use(Antd).mount('#app')
