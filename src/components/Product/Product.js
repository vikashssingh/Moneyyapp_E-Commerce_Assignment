// import axios from 'axios'
import { Heading } from "@chakra-ui/react";
import React from "react";
import { CartState } from "../context/Context";
import Singleproduct from "../Singleproduct";
import "../Style.css";
const Product = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);

  return (
    <>
    <Heading style={{marginBottom:"30px"}}> E-commerce App</Heading>
     
     
      <div className="main-div">
        {products.map((prod) => {
          return (
            <div>
              <Singleproduct prod={prod} key={prod.id} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
