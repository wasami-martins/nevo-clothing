import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/home/Home.component";
import Navigation from "./Routes/navigation/Navigation";
import Authentication from "./Routes/authentication/authentication";
import Shop from "./Routes/shop/shop";
import Checkout from "./Routes/checkout/checkout";
import { GlobalStyle } from "./global.styles";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
