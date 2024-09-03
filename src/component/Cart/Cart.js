"use client";
import React from "react";
import { useCart } from "@/app/context/CartContext";

const Cart = () => {
  const { cartItems } = useCart();
  console.log(cartItems, "cartitem");
  return <h1>Cart</h1>;
};

export default Cart;
