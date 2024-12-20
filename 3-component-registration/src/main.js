import { createApp } from 'vue'
import App from './App.vue'
import CompositionComponent from './components/CompositionComponent.vue'

const app = createApp(App)
app.component("CompositionComponent", CompositionComponent)
app.mount('#app')
