import React from "react";
import Slider from "react-slick";

// import Publicacion001 from '../../assets/publicacion001.jpeg'
// import Publicacion002 from '../../assets/publicacion002.jpeg'

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
      <div>
        <img className="image-slider" src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg" alt="1"/>
      </div>
      <div>
        <img className="image-slider" src="https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1" alt="2"/>
      </div>
      <div>
      <img className="image-slider" src="https://images.pexels.com/photos/209807/pexels-photo-209807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="3"/>
      </div>
      <div>
        <img className="image-slider" src="https://image.shutterstock.com/image-photo/hand-touching-virtual-world-connection-260nw-1750972730.jpg" alt="4"/>
      </div>
      <div>
        <img className="image-slider" src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800" alt="5"/>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  )
}

export default CarouselHome;