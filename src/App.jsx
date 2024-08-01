import Banner2 from "./components/Banner2";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import NikeExperiencies from "./components/NikeExperiencies";
import PromocionCuotas from "./components/PromocionCuotas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Error404 from "./components/Error404";

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <PromocionCuotas />
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/*"} element={<Error404 />} />
          </Routes>
          <Banner2 />
          <NikeExperiencies />
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
