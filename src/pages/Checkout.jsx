import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommandSection from "../components/UI/command-section/CommandSection";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";

import "../styles/checkout.css";

 const Checkout = () => {

  const [enterName, setName] = useState('');
  const [enterEmail, setEmail] = useState('');
  const [enterPhoneNumber, setPhoneNumber] = useState('');
  const [enterCountry, setCountry] = useState('');
  const [enterCity, setCity] = useState('');
  const [enterPostalCode, setPostalCode] = useState('');


  const cartTotalAmount = useSelector(state=> state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const shippingInfo = [];

  const handleSubmit = event => {
    event.preventDefault();

    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterPhoneNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: enterPostalCode
    }

    shippingInfo.push(userShippingAddress);

    console.log(shippingInfo);
  }

  return (
    <Helmet title="Checkout">
      <CommandSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg='8' md='6'>
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form" onSubmit={handleSubmit}>
                <div className="form__group">
                  <input type="text" placeholder="Enter your name" onChange={e=> setName(e.target.value)} required/>
                </div>

                <div className="form__group">
                  <input type="email" placeholder="Enter your email" onChange={e=> setEmail(e.target.value)} required/>
                </div>

                <div className="form__group">
                  <input type="number" placeholder="Phone number" onChange={e=> setPhoneNumber(e.target.value)} required/>
                </div>

                <div className="form__group">
                  <input type="text" placeholder="Country" onChange={e=> setCountry(e.target.value)} required/>
                </div>

                <div className="form__group">
                  <input type="text" placeholder="City" onChange={e=> setCity(e.target.value)} required/>
                </div>

                <div className="form__group">
                  <input type="number" placeholder="Postal code" onChange={e=> setPostalCode(e.target.value)} required/>
                </div>
                <button type="submit" className="addToCart__btn">Payment</button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex justify-content-between align-items-center mb-3">Subtotal: <span>$ {cartTotalAmount}</span></h6>
                <h6 className="d-flex justify-content-between align-items-center mb-3">Shipping: <span>$ {shippingCost}</span></h6>
                <div className="checkout__total">
                  <h5 className="d-flex justify-content-between align-items-center">Total: <span>$ {totalAmount}</span></h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
 }

 export default Checkout;