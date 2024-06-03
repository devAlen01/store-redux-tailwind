import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create/Create";
import Product from "./components/Product/Product";
import Favorite from "./components/Favorite/Favorite";
import Basket from "./components/Basket/Basket";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/product" element={<Product />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/details" element={<Details />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
