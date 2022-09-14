import { Button, Image } from "@chakra-ui/react";
import React from "react";
import { CartState } from "./context/Context";
import "./Style.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  //   MenuItemOption,
  //   MenuGroup,
  //   MenuOptionGroup,
  //   MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  const {
    state: { cart },
  } = CartState();

  return (
    <div className="cart-button">
      {/* <h4> {cart.length}</h4> */}
      {cart.length >= 0 ? (
        <>
          <Menu>
            <MenuButton
              colorScheme="green"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Cart {cart.length}
            </MenuButton>
            <MenuList>
              {cart.map((prod) => (
                <MenuItem minH="48px">
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src={prod.image}
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                  />
                  <span>{prod.name}</span>
                </MenuItem>
              ))}

              <Button style={{width:"100%"}} onClick={() => nav("/cart")} colorScheme="blue">
                Go To Cart<Link to="/cart"></Link>
              </Button>
            </MenuList>
          </Menu>
        </>
      ) : (
        <span style={{ padding: 10 }}>Cart is Empty!</span>
      )}
    </div>
  );
};

export default Header;
