import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../scss/custom-testimonial.scss' // Overide css in react-responsive-carousel

// Modern Testimonials using react-responsive-carousel
// https://dev.to/aryaziai/modern-testimonials-in-react-tutorial-cn1
// http://react-responsive-carousel.js.org/
function Testimonial(props) {
  return (
    <Carousel>
      {props.children}
    </Carousel>
  );
}


export default Testimonial;
