import { Button, Heading, Image, Text } from "@chakra-ui/react";
// import { prettyDOM } from "@testing-library/react";
import { Scrollbars } from "react-custom-scrollbars-2";
import React, { useEffect, useState } from "react";
import { Form, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartState } from "./context/Context";
// import { Select } from "@chakra-ui/react";
import "./Style.css";
const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  //   const [count, setCount] = useState(1);
  // console.log(cart);
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return cart.length === 0 ? (
    <>
      <Image
        style={{
          height: "300px",
          width: "30%",
          margin: "auto",
          marginTop: "150px",
        }}
        src="https://www.kindpng.com/picc/m/174-1749396_empty-cart-your-cart-is-empty-hd-png.png"
      />
      <br />
      <br />
      <Button colorScheme="yellow">
        <Link to="/">Home Page</Link>
      </Button>
    </>
  ) : (
    <div className="home">
      <Heading style={{ marginBottom: "30px" }}> Cart page</Heading>
      <div className="productContainer">
        <ListGroup>
          <Scrollbars>
            {cart.map((el) => {
              return (
                <>
                  <div className="list-div" key={el.id}>
                    <img src={el.image} alt={el.image} />
                    <Text style={{ fontWeight: "bold" }} fontSize="1xl">
                      {el.name}
                    </Text>
                    {/* <h2>{el.name}</h2> */}
                    <h2>₹ {el.price}</h2>
                     <Form.Control
                      as="select"
                      value={el.qty}
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: {
                            id: el.id,
                            qty: e.target.value,
                          },
                        })
                      }
                    >
                      {[...Array(4).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </Form.Control>

                    <Button
                      style={{ width: "70%" }}
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: el,
                        });
                      }}
                      colorScheme="red"
                    >
                      Remove
                    </Button>
                  </div>
                  <hr />
                </>
              );
            })}
          </Scrollbars>
        </ListGroup>
        <div className="summary">
          {/* <span className="title">Subtotal({cart.length}) items</span> */}
          <Text className="title" style={{ fontWeight: "bold" }} fontSize="1xl">
            Subtotal ( {cart.length} ) items
          </Text>
          <br />
          <span style={{ color: "pink" }}>
            Total Amount : <b>{total}</b>
          </span>
          <br />
          {/* <Button> Proceed To Checkout</Button> */}
          <br />
          <br />
          <Button colorScheme="yellow">
            <Link to="/">Home Page</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
