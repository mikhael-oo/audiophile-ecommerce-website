import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/homepage/Home";
import HeadPhones from "./components/headphonepage/HeadPhones";
import Speaker from "./components/speakerpage/Speaker";
import EarPhones from "./components/earphonepage/Earphones";
import ProductHeadPhone1 from "./components/headphonepage/product1/ProductHeadPhone1";
import ProductHeadPhone2 from "./components/headphonepage/product2/ProductHeadPhone2";
import ProductHeadPhone3 from "./components/headphonepage/product3/ProductHeadPhone3";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App bg-white">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<HeadPhones />} >
            
          </Route>
          <Route path="/headphones/one" element={<ProductHeadPhone1 />} />
          <Route path="/headphones/two" element={<ProductHeadPhone2 />} />
          <Route path="/headphones/three" element={<ProductHeadPhone3 />} />
          <Route path="/speakers" element={<Speaker />} />
          <Route path="/earphones" element={<EarPhones />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
