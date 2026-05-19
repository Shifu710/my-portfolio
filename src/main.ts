import { createApp } from 'vue'
import { ElButton, ElCard, ElForm, ElFormItem, ElInput } from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import { pinia } from './stores'
import './styles/main.css'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(ElButton)
app.use(ElCard)
app.use(ElForm)
app.use(ElFormItem)
app.use(ElInput)

app.mount('#app')
