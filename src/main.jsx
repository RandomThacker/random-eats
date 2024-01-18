import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import "./index.css";
import Layout from "./Components/Layout";
import MenuPage from "./Pages/MenuPage";
import MenuPage1 from "./Pages/MenuPage1";
import { useState } from "react";
import { SearchContext } from "./Utils/SearchContext";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Checkout from "./Pages/Checkout";
import Error from "./Pages/Error";

export default function App() {
  const [search, setSearch] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  return (
    <Provider store={appStore}>
      <SearchContext.Provider
        value={{ search, setSearch, searchClicked, setSearchClicked }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout/>} />
              <Route path="*" element={<Error/>} />
              <Route path="/menu/:resId" element={<MenuPage />} />
              <Route path="/restraunt/:resId" element={<MenuPage1 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SearchContext.Provider>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
