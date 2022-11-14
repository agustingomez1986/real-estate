import React from "react";
import Slider from "react-slick";

import { DATA } from '../../data.js'

import './carousel.styles.scss';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const CarouselHome = () => {
  var settings = {
    autoplay: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {DATA.map((data) => (
        data.items.map((items) => (
          <div key={items.id}>
            <div className="image-slider" style={{backgroundImage: `url(${items.imageUrl})`}} />
            <ul className="data-slider">
              <li>{items.price}</li>
              <li>{items.size}</li>
            </ul>
            

          </div>
        ))
      ))}
    </Slider>
  )

  
}

export default CarouselHome;