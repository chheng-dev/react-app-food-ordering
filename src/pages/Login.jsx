import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommandSection from "../components/UI/command-section/CommandSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

 const Login = () => {
  const loginNameRef = useRef();
  const loginPwdRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();

  }

  return (
    <Helmet title="Login">
      <CommandSection title="Login"/>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm="12" className="mx-auto text-center ">
              <form action="" className="form mb-4" onSubmit={handleSubmit}>
                <div className="form__group">
                  <input type="text" placeholder="Email" required ref={loginNameRef}/>
                </div>  
                <div className="form__group">
                  <input type="password" placeholder="Password" required ref={loginPwdRef}/>
                </div>  
                <button type="submit" className="addToCart__btn">Login</button>
              </form>
              <Link to={'/register'}> 
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
 }

 export default Login;