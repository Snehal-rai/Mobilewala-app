import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/cartPage";
import WelcomePage from "./WelcomePage";
import Footer from "./footer";

function App() {
  return (
    <div className="background-app-animation">
      <BrowserRouter>
        <WelcomePage />
        <div>
          <Navbar />
          <Routes>

            <Route exact path="/" element={<ProductCard />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;