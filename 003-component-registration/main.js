import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import Composition from "./components/Composition.vue"
import Options from "./components/Options.vue"

const app = createApp(App)
    .component("Composition", Composition)
    .component("Options", Options)

app.mount('#app')
