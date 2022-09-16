import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import HeaderAd from "./components/header/HeaderAd";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Category from "./components/category/Category";
import ProductCatalog from "./components/productCatalog/ProductCatalog";
import BannerSale from "./components/banner/BannerSale";
import Benefit from "./components/benefit/Benefit";

function App() {
  return (
    <div className="App">
      <header>
        <HeaderAd />
        <Header />
      </header>
      <main>
        <Banner />
        <Category />
        <ProductCatalog />
        <BannerSale />
        <Benefit />
      </main>
    </div>
  );
}

export default App;
