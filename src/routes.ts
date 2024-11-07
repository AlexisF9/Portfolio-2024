import Home from "./pages/Home.vue";
import SingleRea from "./pages/SingleRea.vue";

export const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/projet/:name',
        component: SingleRea,
        name: 'single-rea'
    }
]