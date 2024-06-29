import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import NikeExperiencies from "./components/NikeExperiencies";
import PromocionCuotas from "./components/PromocionCuotas";

function App() {
  return (
    <>
      <PromocionCuotas />
      <NavBar />
      <Banner />
      <ItemListContainer texto={"No se encontraron productos!"} />
      <Banner2 />
      <NikeExperiencies />
      <Footer />
    </>
  )
}

export default App
