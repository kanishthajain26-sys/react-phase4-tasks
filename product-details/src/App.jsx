import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;