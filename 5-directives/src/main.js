import { createApp } from 'vue'
import App from './App.vue'
import CompositionComponent from './components/CompositionComponent.vue'
import "./index.css"

const app = createApp(App)
app.component("CompositionComponent", CompositionComponent)
app.mount('#app')
