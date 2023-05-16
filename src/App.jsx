import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Routes/home/Home.component";
import Navigation from "./components/Routes/navigation/Navigation";
import Authentication from "./components/Routes/authentication/authentication";

const Shop = () => {
  return <h1>I am shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
