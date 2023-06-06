import { useState, useEffect, useContext, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import axios from "axios";


import NavBar from "./components/navbar/NavBar";
import Profile from "./components/navbar/Profile";
import Home from "./components/homepage/Home";
import HeadPhones from "./components/headphonepage/HeadPhones";
import Speaker from "./components/speakerpage/Speaker";
import EarPhones from "./components/earphonepage/Earphones";
import Checkout from "./components/checkout/Checkout"
import LoginSignup from "./components/authentication/LoginSignup";

import ProductHeadPhone1 from "./components/headphonepage/product1/ProductHeadPhone1";
import ProductHeadPhone2 from "./components/headphonepage/product2/ProductHeadPhone2";
import ProductHeadPhone3 from "./components/headphonepage/product3/ProductHeadPhone3";
import ProductSpeaker1 from "./components/speakerpage/product1/ProductSpeaker1";
import ProductSpeaker2 from "./components/speakerpage/product2/ProductSpeaker2";
import ProductEarphone1 from "./components/earphonepage/product1/ProductEarphone1";

function App() {
  const [userContext, setUserContext] = useContext(UserContext);

  const verifyUser = useCallback(() => {
    axios.post("http://localhost:5001/users/refreshToken", {}, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Credentials": "true",
      }
    })
    .then(res => {
      if (res.statusText === "OK") {
        const data = res.data;
        setUserContext(oldVal => {
          return {
            ...oldVal,
            token: data.token
          }
        })
      } else {
        setUserContext(oldVal => {
          return {
            ...oldVal,
            token: null
          }
        })
      }
      setTimeout(verifyUser, 1000 * 60 * 5);
    })
  }, [setUserContext])

  useEffect(() => {
    verifyUser();
  }, [verifyUser])



  return (
    
      <BrowserRouter>
        <div className="App bg-white">
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<LoginSignup />} />
            <Route path="/profile" element={<Profile />} />


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
