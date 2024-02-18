import { Hero } from "./Hero/Hero";
import { Footer } from "./Footer/Footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div>
      <div className="flex flex-col">
        <Hero />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
