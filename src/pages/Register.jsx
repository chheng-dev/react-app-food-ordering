import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommandSection from "../components/UI/command-section/CommandSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

 const Register = () => {
  const signupNameRef = useRef();
  const signupPwdRef = useRef();
  const signupFullNameRef = useRef();


  const handleSubmit = event => {
    event.preventDefault();
    
  }

  return (
    <Helmet title="Register">
      <CommandSection title="Register"/>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm="12" className="mx-auto text-center ">
              <form action="" className="form mb-4" onSubmit={handleSubmit}>
                <div className="form__group"> 
                  <input type="text" placeholder="Full name" required ref={signupFullNameRef}/>
                </div>  
                <div className="form__group">
                  <input type="text" placeholder="Email" required ref={signupNameRef}/>
                </div>  
                <div className="form__group">
                  <input type="password" placeholder="Password" required ref={signupPwdRef}/>
                </div>  
                <button type="submit" className="addToCart__btn">Register</button>
              </form>
              <Link to={'/login'}> 
                Already have an account? Login
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
 }

 export default Register;