import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/homepage/Home";
import HeadPhones from "./components/headphonepage/HeadPhones";
import Speaker from "./components/speakerpage/Speaker";
import EarPhones from "./components/earphonepage/Earphones";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App bg-white">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<HeadPhones />} />
          <Route path="/speakers" element={<Speaker />} />
          <Route path="/earphones" element={<EarPhones />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
