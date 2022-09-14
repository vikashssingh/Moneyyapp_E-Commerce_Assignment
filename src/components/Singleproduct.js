import React from "react";
import { Button, Text } from "@chakra-ui/react";
import "./Style.css";
import { CartState } from "./context/Context";
const Singleproduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
 
  console.log(cart);
  return (
    <div className="container-div">
      <div className="container">
        <img src={prod.image} alt={prod.image} />
        <Text style={{fontWeight:"bold"}} fontSize='1xl'>{prod.name}</Text>
        {/* <h2></h2> */}
        <span>₹ {prod.price}</span>
        <br />
        {cart.some((p) => p.id === prod.id) ? (
          <Button
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: prod,
              });
            }}
            colorScheme="red"
          >
            Remove from cart
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: prod,
              });
            }}
            colorScheme="blue"
          >
            add to cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default Singleproduct;
