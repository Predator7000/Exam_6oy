import "./index.css";
import { Hero } from "./layout/Hero/Hero";
import { Home } from "./Pages/Home/Home";
import { Footer } from "./layout/Footer/Footer";
import { Shop } from "./Pages/Shop/shop";
import { Route, Routes } from "react-router-dom";
import { routes } from "./router/router";
import { nanoid } from "nanoid";

function App() {
  return (
    <div>
      <Hero />
      <Routes>
        <Route path="/">
          {routes.map((item) => (
            <Route key={nanoid()} path={item.path} element={item.component} />
          ))}
        </Route>
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
