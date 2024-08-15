import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import ServicesPage from "../views/ServicesPage.vue";
import ContactPage from "../views/ContactPage.vue";
import PricingPage from "../views/PricingPage.vue";
import FAQPage from "../views/FAQPage.vue";
import BlogHomePage from "../views/BlogHomePage.vue";
import BlogPostPage from "../views/BlogPostPage.vue";
import PortafolioOverviewPage from "../views/PortafolioOverviewPage.vue";
import PortafolioItem from "../views/PortafolioItem.vue";

const routes = [
    {
        name: "HomePage",
        path: "/",
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
    {
        name: "ContactPage",
        path: "/contact",
        component: ContactPage
    },
    {
        name: "PricingPage",
        path: "/pricing",
        component: PricingPage
    },
    {
        name: "FAQPage",
        path: "/faq",
        component: FAQPage
    },
    {
        name: "BlogHomePage",
        path: "/blogHome",
        component: BlogHomePage
    },
    {
        name: "BlogPostPage",
        path: "/blogPost",
        component: BlogPostPage
    },
    {
        name: "PortafolioOverviewPage",
        path: "/portafolioOverview",
        component: PortafolioOverviewPage
    },
    {
        name: "PortafolioItem",
        path: "/portafolioItem",
        component: PortafolioItem
    }
];

const router = createRouter({
    history : createWebHistory(), routes
});

export default router;