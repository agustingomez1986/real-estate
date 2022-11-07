import { Fragment } from 'react';
import CarouselHome from '../../components/carousel/carousel.component'

import './home.styles.scss';

const Home = () => {
  return (
    <Fragment>
      <div>
        <div className='banner-container'>
          <h1 className='banner-text'>Encuentre su lugar soñado para vivir</h1>
        </div>
      </div>
      <div className='carousel-container'>
        <CarouselHome />
      </div>
    </Fragment>
    
  )
}

export default Home;