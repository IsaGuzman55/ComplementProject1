import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import ServicesPage from "../views/ServicesPage.vue";

const routes = [
    {
        name: "HomePage",
        path: "/home",
        component: HomePage
    },
    {
        name: "AboutPage",
        path: "/about",
        component: AboutPage
    },
    {
        name: "ServicesPage",
        path: "/services",
        component: ServicesPage
    },
];

const router = createRouter({
    history : createWebHistory(), routes
});

export default router;