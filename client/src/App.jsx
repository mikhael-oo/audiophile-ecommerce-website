import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import NavBar from "./components/navbar/NavBar";
import Home from "./components/homepage/Home";
import HeadPhones from "./components/headphonepage/HeadPhones";
import Speaker from "./components/speakerpage/Speaker";
import EarPhones from "./components/earphonepage/Earphones";
import Checkout from "./components/checkout/Checkout"
import Login from "./components/Login/Login";

import ProductHeadPhone1 from "./components/headphonepage/product1/ProductHeadPhone1";
import ProductHeadPhone2 from "./components/headphonepage/product2/ProductHeadPhone2";
import ProductHeadPhone3 from "./components/headphonepage/product3/ProductHeadPhone3";
import ProductSpeaker1 from "./components/speakerpage/product1/ProductSpeaker1";
import ProductSpeaker2 from "./components/speakerpage/product2/ProductSpeaker2";
import ProductEarphone1 from "./components/earphonepage/product1/ProductEarphone1";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      axios.get("http://localhost:5001/auth/login/success")
        .then((res) => {
          console.log(res);
          
        })
        .catch((err) => {
          console.log(err);
        })
    };
    getUser();
  }, []);


  return (
    <BrowserRouter>
      <div className="App bg-white">
        <NavBar user={user} />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/headphones" element={<HeadPhones />} >
            
          </Route>
          <Route path="/headphones/one" element={<ProductHeadPhone1 />} />
          <Route path="/headphones/two" element={<ProductHeadPhone2 />} />
          <Route path="/headphones/three" element={<ProductHeadPhone3 />} />

          <Route path="/speakers" element={<Speaker />} />
          <Route path="/speakers/one" element={<ProductSpeaker1 />} />
          <Route path="/speakers/two" element={<ProductSpeaker2 />} />

          <Route path="/earphones" element={<EarPhones />} />
          <Route path="/earphones/one" element={<ProductEarphone1 />} />

          <Route path="/checkout" element={<Checkout />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
