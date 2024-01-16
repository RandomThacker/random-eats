import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import './index.css'
import Layout from './Components/Layout';
import MenuPage from "./Pages/MenuPage";
import MenuPage1 from "./Pages/MenuPage1";




export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<h1>Error</h1>} />
          <Route path="/menu/:resId" element={<MenuPage/>}/>
          <Route path="/restraunt/:resId" element={<MenuPage1/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);