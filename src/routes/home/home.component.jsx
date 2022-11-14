import { Fragment, useContext } from 'react';
import CarouselHome from '../../components/carousel/carousel.component'

import { DropdownContext } from '../../context/dropdown.context';
import HeaderDropdown from '../../components/header-dropdown/header-dropdown.component';

import './home.styles.scss';

const Home = () => {
  const { isDropdownOpen } = useContext(DropdownContext)

  return (
    <Fragment>
      {isDropdownOpen && <HeaderDropdown />}
      <div className='banner-container'>
        <h1 className='banner-text'>Encuentre su lugar soñado para vivir</h1>
      </div>
      <div className='carousel-container'>
        <CarouselHome />
      </div>
    </Fragment>
  )
}

export default Home;