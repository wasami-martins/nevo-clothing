import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Routes/home/Home.component";
import Navigation from "./components/Routes/navigation/Navigation";
import SignIn from "./components/Routes/sign-in/sign-in";

const Shop = () => {
  return <h1>I am shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
