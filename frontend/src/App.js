import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import shop2_banner from './Components/Assets/banner_mens.png'
import shop3_banner from './Components/Assets/banner_women.png'
import shop4_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shop2" element={<ShopCategory banner={shop2_banner} category="men" />} />
          <Route path="/shop3" element={<ShopCategory banner={shop3_banner} category="women" />} />
          <Route path="/shop4" element={<ShopCategory banner={shop4_banner} category="kid" />} />
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
