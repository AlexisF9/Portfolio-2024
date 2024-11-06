import { createApp } from 'vue'
import './assets/styles/style.scss'
import App from './App.vue'
import { routes } from './routes.ts'
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {
            top: 0
        }
    },
})

const app = createApp(App)
app.use(router)
app.mount('#app')
