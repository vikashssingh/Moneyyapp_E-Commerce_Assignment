import React, { useContext, useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducer";
import axios from "axios";
faker.seed(99); //it will not chnage the data evertime
const Cart = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    fastDelivery: faker.datatype.boolean(),
  }));

 
  const [state, dispatch] = useReducer(cartReducer, {
    products:products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
