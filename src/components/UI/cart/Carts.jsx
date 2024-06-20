import React from "react";
import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

import "../../../styles/shopping-cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shipping-cart/cartUiSlice";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  }

  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item_list">
          {
            cartProducts.length === 0 ? (
              <h6>No item added to the cart</h6>
            ) : (
              cartProducts.map((item, index) => (
                <CartItem item={item} key={index} />
              ))
            )
          }
        </div>

        <div className="cart__button d-flex align-items-center justify-content-between">
          <h6>Subtotal amount: <span>${totalAmount}</span></h6>
          <button>
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  )
}


export default Carts;