import React from "react";
import { Col, Container, List, ListGroup, ListGroupItem, Row } from "reactstrap";
import logo from "../../assets/images/logo.png";
import "../../styles/Footer.css"
import { Link } from "react-router-dom";
import { RiFacebookLine } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";




const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="6" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo"/>
              <h5>Tasty Treat</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
            </div>
          </Col>

          <Col lg="6" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="delivery__time_list">
              <ListGroupItem className="border-0 ps-0 delivery__time_item">
                <span>Sunday - Thrusday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="border-0 ps-0 delivery__time_item">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="6" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="delivery__time_list">
              <ListGroupItem className="border-0 ps-0 delivery__time_item">
                <span>Location: Phnom Penh, Cambodia</span>
              </ListGroupItem>
              <ListGroupItem className="border-0 ps-0 delivery__time_item">
                <span>Phone: 093983382</span>
              </ListGroupItem>
              <ListGroupItem className="border-0 ps-0 delivery__time_item">
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="6" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe or newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email"/>
              <span>
                <i className="ri-send-plane-line"/>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg='6' md="6">
            <p className="copyright__text">Copyright - 2024, website made by Oeung Chungchheng. All Rights Reserved.</p>
          </Col>
          <Col lg='6' md="6">
            <div className="social__links d-flex align-items-center justify-content-end gap-3">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <Link to='https://www.facebook.com/'>
                  <RiFacebookLine className="footer__icon"/>
                </Link>
              </span>

              <span>
                <Link to='https://github.com/'>
                  <SlSocialYoutube className="footer__icon"/>
                </Link>
              </span>

              <span>
                <Link to='https://github.com/'>
                  <FiGithub className="footer__icon"/>
                </Link>
              </span>

              <span>
                {" "}
                <Link to='https://www.youtube.com/'>
                  <FaLinkedinIn className="footer__icon"/>
                </Link>
              </span>
            </div>
          </Col>
        </Row>

      </Container>
    </footer>
  )
}

export default Footer;