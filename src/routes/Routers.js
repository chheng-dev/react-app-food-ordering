import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetail from "../pages/FoodDetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import { Navigate } from "react-router-dom";

const Routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to='/home' />} />
    <Route path="/home" element={<Home/>} />
    <Route path="/foods"   element={<AllFoods/>} />
    <Route path="/foods/:id"   element={<FoodDetail/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/checkout" element={<Checkout/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/contact" element={<Contact/>} />

  </Routes>
}

export default Routers;