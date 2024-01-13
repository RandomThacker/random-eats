import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";import Home from './Pages/Home'
import Cart from './Pages/Cart'
import './index.css'


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);