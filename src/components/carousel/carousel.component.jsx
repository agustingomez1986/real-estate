import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Publicacion001 from '../../assets/publicacion001.jpeg'
import Publicacion002 from '../../assets/publicacion002.jpeg'

const CarouselHome = () => {
  return (
    <Carousel autoPlay='true' infiniteLoop='true' width='600px'>
      <div>
        <img src={Publicacion001} alt='001'/>
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={Publicacion002} alt='002'/>
        <p className="legend">Legend 2</p>
      </div>
    </Carousel>
  )
}

export default CarouselHome;