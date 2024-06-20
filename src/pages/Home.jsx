import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category";
import TestimonialSlider from "../components/UI/slider/TestimonialSlide";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import whyImage from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";


const featureData = [
  {
    title: 'Quick Delivery',
    imageUrl: featureImg01,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    title: 'Super Dine In',
    imageUrl: featureImg02,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    title: 'Easy Pickup',
    imageUrl: featureImg03,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  }
];

const Home = () => {

  const [category, setCategory] = useState('ALL');
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter(item => item.category === 'Pizza');
    const slicePizza = filteredPizza.slice(0,4);  
    setHotPizza(slicePizza);
  },[]);

  useEffect(() => {
    if(category === 'ALL'){
      setAllProducts(products);
    }

    if(category === 'BURGER'){
      const filteredProducts = products.filter(item=> item.category === 'Burger');
      setAllProducts(filteredProducts);
    }

    if(category === 'PIZZA'){
      const filteredProducts = products.filter(item=> item.category === 'Pizza');
      setAllProducts(filteredProducts);
    }

    if(category === 'BREAD'){
      const filteredProducts = products.filter(item=> item.category === 'Bread');
      setAllProducts(filteredProducts);
    }

  },[category])

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> just wait food <span>at your door</span>
                </h1>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn">
                    <Link to={'/foods'}>See all foods</Link>
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__content">
              <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
          <div className="hero__service d-flex align-items-center gap-5 mt-3">
            <p className="d-flex align-items-center gap-2">
              <span className="shipping__icon"><i className="ri-car-line"></i></span>{" "} No shipping charge
            </p>

            <p className="d-flex align-items-center gap-2">
              <span className="shipping__icon"><i className="ri-shield-check-line"></i></span>{" "} 100% secure checkout 
            </p>
          </div>
        </Container>
      </section>

      <section className="pt-0">
        <Category/>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">we will <span>take care</span></h2>
              <p className="mb-1 mt-4 feature__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <p className="feature__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </Col>

            {
              featureData.map((item, index) => (
                <Col lg='4' md='6' sm='6' key={index} className="mt-4">
                  <div className="feature__item text-center px-5 py-3">
                    <img src={item.imageUrl} alt="feature-img" className="w-25 mb-3"/>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              ))
            }

            <Col lg='4' md='4'>
            </Col>
            <Col lg='4' md='4'>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg='12'>
              <div className="food__category d-flex align-items-center justify-content-center">
                <button className={`all__btn ${category === 'ALL' ? 'foodBtnActive' : ''}`}
                  onClick={()=>setCategory('ALL')}>
                  All
                  </button>

                <button 
                  className={`d-flex align-items-center gap-2 ${category === 'BURGER' ? 'foodBtnActive' : ''}`} 
                  onClick={()=>setCategory('BURGER')}>
                  <img src={foodCategoryImg01} alt="" /> Burger
                </button>

                <button 
                  className={`d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'foodBtnActive' : ''}`} 
                  onClick={()=>setCategory('PIZZA')}>
                  <img src={foodCategoryImg02} alt="" /> Pizza
                </button>

                <button 
                  className={`d-flex align-items-center gap-2 ${category === 'BREAD' ? 'foodBtnActive' : ''}`} 
                  onClick={()=>setCategory('BREAD')}> 
                  <img src={foodCategoryImg03} alt="" /> Bread
                </button>
              </div>
            </Col>

            {
              allProducts.map(item=>(
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className="mt-5">
                  <ProductCard item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section> 

      <section className="why__choose_us">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImage} alt="why-tasty-treat" className="w-100"/>
            </Col>
            <Col lg='6' md='6'>
              <div className="why__tasty_treat">
                <h2 className="tasty__treat_title mb-4">
                  Why <span>Tasty Treat? </span>
                </h2>
                <p className="tasty__treat_desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                  content here', making it look like readable English.
                </p>
                
                <ListGroup>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us_title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Fresh and tasty
                    </p>
                    <p className="choose__us_desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us_title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Quality
                    </p>
                    <p className="choose__us_desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us_title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Order from any location
                    </p>
                    <p className="choose__us_desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2>Hot Pizza</h2>
            </Col>

            {
              hotPizza.map((item) => (
                <Col lg='3' md='4' sm='6' xs="6" key={item.id} className="mb-3">
                  <ProductCard item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="testimonial mb-4">
                <h5 className="testimonial__subtitle">Testimonial</h5>
                <h2 className="testimonial__title">What our <span>customers</span> are saying</h2>
                <p className="testimonial_desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>

                <TestimonialSlider />
              </div>
            </Col>
            <Col lg='6' md='6'>
              <img src={networkImg} alt="testimonial-image" className="w-100"/>
            </Col>
          </Row>
        </Container>
      </section>

    </Helmet>
  )    
}

 export default Home;