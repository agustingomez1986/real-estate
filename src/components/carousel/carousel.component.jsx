import React from "react";
import Slider from "react-slick";

import { DATA } from '../../data.js'

import './carousel.styles.scss';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import HomeIcon from '../../assets/home-icon.png';
import SurfaceIcon from '../../assets/surface-icon.png';

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
              <li className="data-slider__list">
                {items.size}
                <img
                  className="slider__home-icon"
                  src={data.title === 'Casas' ? HomeIcon : SurfaceIcon}
                  alt='home-icon'
                />
              </li>
              <li>{items.price}</li>
            </ul>
          </div>
        ))
      ))}
    </Slider>
  )

  
}

export default CarouselHome;