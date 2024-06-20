import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommandSection from "../components/UI/command-section/CommandSection";
import { Col, Container, Row } from "reactstrap";
import "../styles/cart-page.css"
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/shipping-cart/cartSlice";
import { Link } from "react-router-dom";

 const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommandSection title='Your Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              {
                cartItems.length === 0 ?
                <h5 className="text-center">Your cart is empty</h5> : 
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartItems.map(item => <Tr item={item} key={item.id} />)
                    }
                  </tbody>
                </table>
              }
              <div className="mt-4">
                <h6 className="cart__subtotal">Subtotal: $ <span>{totalAmount}</span></h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page_btn">
                  <button className="addToCart__btn me-3">
                    <Link to={'/foods'} className="text-white">Continue Shoppinng</Link>
                  </button>
                  <button className="addToCart__btn">
                    <Link to={'/checkout'} className="text-white">Proccess to checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );  
 }

 const Tr = (props) => {
  const { image01, title, price, quantity, id } = props.item;
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  }

  return (
    <tr>
      <td className="text-center cart__image_box">
        <img src={image01} alt="image-cart" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center cart__item_del">
        <i className="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  )
 }

 export default Cart;