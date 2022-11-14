import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Logo from '../../assets/complete-logo-invert.png';
import LogoHouse from '../../assets/logo-invert.png';
import HeaderArrowIcon from '../../components/header-arrow-icon/header-arrow-icon.component';

import './header.styles.scss';

const Header = () => {
  // activeLogo = Logo;
  window.addEventListener("scroll", ()=>{
    if (window.scrollY !=0) {
      return LogoHouse;
    } else {
      return Logo;
    }
  })

  return (
    <Fragment>
      <div className='header'>
        <div className='header-container'>
          <div className='logo-container'>
            <img className='logo' src={Logo} alt='logo' />
          </div>
          <div className="nav__burguer">
            <div className="nav__burguer-line-1"></div>
            <div className="nav__burguer-line-2"></div>
            <div className="nav__burguer-line-3"></div> 
          </div>
        </div>
        <div className="nav-arrow">
          <HeaderArrowIcon />
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Header;