import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/homepage/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App bg-white">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
