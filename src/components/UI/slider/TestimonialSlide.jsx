import React from "react";
import Slider from "react-slick";

import ava1 from "../../../assets/images/ava-1.jpg";
import ava2 from "../../../assets/images/ava-2.jpg";
import ava3 from "../../../assets/images/ava-3.jpg";
import ava4 from "../../../assets/images/ava-4.jpg";

import "../../../styles/slider.css";
import { Container } from "reactstrap";



const TestimonialSlider =  () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    swipeToSlide: true
  };

  return (
    <Container>
      <Slider {...settings}>
        <div>
          <p className="review__text">"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."</p>
          <div className="slider__content d-flex align-items-center gap-3">
            <img src={ava1} alt="avatar-1" className="  rounded" />
            <h6>Jhon Doe</h6>
          </div>
        </div>

        <div>
          <p className="review__text">"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."</p>
          <div className="slider__content d-flex align-items-center gap-3">
            <img src={ava2} alt="avatar-2" className="  rounded" />
            <h6>Jhon Doe</h6>
          </div>
        </div>

        <div>
          <p className="review__text">"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."</p>
          <div className="slider__content d-flex align-items-center gap-3"> 
            <img src={ava3} alt="avatar-3" className="  rounded" />
            <h6>Jhon Doe</h6>
          </div>
        </div>

        <div>
          <p className="review__text">"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."</p>
          <div className="slider__content d-flex align-items-center gap-3">
            <img src={ava4} alt="avatar-4" className="  rounded" />
            <h6>Jhon Doe</h6>
          </div>
        </div>
      </Slider>
    </Container>
  )
}

export default TestimonialSlider;