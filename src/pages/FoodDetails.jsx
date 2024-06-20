import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommandSection from "../components/UI/command-section/CommandSection";
import { Col, Container, Row } from "reactstrap";
import productImage from "../assets/images/product_01.1.jpg";
import products from "../assets/fake-data/products";

import "../styles/product-details.css"
import ProductCard from "../components/UI/product-card/ProductCard";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shipping-cart/cartSlice";

 const FoodDetails = () => {
  const { id } = useParams();
  const [tab, setTab] = useState('desc');
  const [enterName, setName] = useState('');
  const [enterEmail, setEmail] = useState('');
  const [reviewMsg, setReviewMsg] = useState('');

  const product = products.find(product => product.id === id);
  const [previewImg, setPreViewImg] = useState(product.image01); 
  const { title, price, category, desc, image01 } = product;

  const relatedProduct = products.filter(item=>category === item.category);
  
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      price,
      image01
    }));
  }

  useEffect(() => {
    setPreViewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const handleSubmit = () => {

  }

  return (
    <Helmet class="product-details">
      <CommandSection title={title} />

      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div className="img_item" onClick={() => setPreViewImg(product.image01)}>
                  <img src={product.image01} alt="product__image" className="w-50 mb-3" />
                </div>
                <div className="img_item" onClick={() => setPreViewImg(product.image02)}>
                  <img src={product.image02} alt="product__image" className="w-50 mb-3" />
                </div>
                <div className="img_item" onClick={() => setPreViewImg(product.image03)}> 
                  <img src={product.image03} alt="product__image" className="w-50 mb-3" />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="product__main_img">
                <img src={previewImg} alt="product__image" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product_content">
                <h2 className="product__title mb-3">{ product.title }</h2>
                <span className="product__price">Price: <span>${price}</span></span>
                <p className="category mb-5">Category: <span>{category}</span></p>
                <button className="addToCart__btn" onClick={addItem}>Add to Card</button>
              </div>
            </Col>

            <Col lg='12'>
              <div className="d-flex align-items-center gap-3 py-2 tabs"> 
                <h6 className={`${tab === 'desc' ? 'tab__active' : ""}`} onClick={()=>setTab('desc')}>Decription</h6>
                <h6 className={`${tab === 'rev' ? 'tab__active' : ""}`} onClick={()=>setTab('rev')}>Review</h6>
              </div>
              {
                tab === 'desc' ? 
                <div className="tab__content">
                  <p>{desc}</p>
                </div> : 
                
              <div className="tab__form mb-3">

                <div className="review pt-4">
                  <p className="user__name mb-0">Jonh Doe</p>
                  <p className="user__email mb-0">jonh@gmail.com</p>
                  <p className="feedback__text">gread product</p>
                </div>

                <div className="review">
                  <p className="user__name mb-0">Jonh Doe</p>
                  <p className="user__email mb-0">jonh@gmail.com</p>
                  <p className="feedback__text">gread product</p>
                </div>

                <div className="review">
                  <p className="user__name mb-0">Jonh Doe</p>
                  <p className="user__email mb-0">jonh@gmail.com</p>
                  <p className="feedback__text">gread product</p>
                </div>

                <form action="" className="form" onSubmit={handleSubmit}>
                  <div className="form__group">
                    <input type="text" placeholder="Enter your name" onChange={e=> setName(e.target.value)} required/>
                  </div>

                  <div className="form__group">
                    <input type="email" placeholder="Enter your email" onChange={e=> setEmail(e.target.value)} required />
                  </div>

                  <div className="form__group">
                    <textarea 
                      type="text" rows={5} 
                      placeholder="Write your review"
                      onChange={e => setReviewMsg(e.target.value)}
                      />
                  </div>

                  <button type="submit" className="addToCart__btn">Submit</button>
                </form>
              </div>                
              }
            </Col>

            <Col lg="12" className="mb-5">
              <h5 className="related__product_title">You might also like</h5>
            </Col>

            {
              relatedProduct.map(item=>(
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className="mb-4">
                  <ProductCard item={item} />
                </Col>
              ))
            }

          </Row>
        </Container>
      </section>
    </Helmet>
  )
 }

 export default FoodDetails;