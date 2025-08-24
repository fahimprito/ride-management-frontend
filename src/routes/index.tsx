import App from "@/App";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Faq from "@/pages/Faq";
import Feature from "@/pages/Feature";
import Homepage from "@/pages/Homepage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                Component: Homepage,
                index: true,
            },
            {
                Component: About,
                path: "about",
            },
            {
                Component: Feature,
                path: "features",
            },
            {
                Component: Contact,
                path: "contact",
            },
            {
                Component: Faq,
                path: "faq",
            },
        ],
    },
    {
        Component: Login,
        path: "/login",
    },
    {
        Component: Register,
        path: "/register",
    },
])