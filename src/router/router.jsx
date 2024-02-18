import { Home } from "../Pages/Home/Home";
import { About } from "../Pages/About/About";
import { Footer } from "../layout/Footer/Footer";
import { Hero } from "../layout/Hero/Hero";
import { Shop } from "../Pages/Shop/shop";
export const routes = [
  {
    path: "/",
    name: "Home",
    component: <Home />,
  },
  {
    path: "about",
    name: "About",
    component: <About />,
  },
  {
    path: "footer",
    name: "Footer",
    component: <Footer />,
  },
  {
    path: "shop",
    name: "Shop",
    component: <Shop />,
  },
  {
    path: "hero",
    name: "Hero",
    component: <Hero />,
  },
];
