import React from "react";
import { ListGroupItem } from "reactstrap";
import "../../../styles/cart-item.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shipping-cart/cartSlice";

const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totoalPrice } = item;
  const dispatch = useDispatch();

  const incrementItem = (event) => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
    // event.stop
  }

  const decreaseItem = (event) => {
    dispatch(cartActions.removeItem(id));
  }

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  }
  

  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item_info d-flex gap-2">
        <img src={image01} alt="" />

        <div className="cart__product_info d-flex align-items-center gap-5 justify-content-between w-100">
          <div>
            <h6 className="cart__product_title">{title}</h6>
            <p className="d-flex align-items-center justify-content-between gap-5 cart__product_price">{quantity}x 
              <span>${price}</span>
            </p>
            <div className="d-flex align-items-center gap-3 justify-content-between increase__decrease_btn">
              <span className="increase__btn" onClick={incrementItem}>
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={decreaseItem}>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span className="delete__btn" onClick={deleteItem}>
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  )
}


export default CartItem;