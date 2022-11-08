import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Logo from '../../assets/logo.jpg';

import './header.styles.scss';

const Header = () => {
  return (
    <Fragment>
      <div className='header-container'>
        <div className='logo-container'>
          <div>
            <img className='logo' src={Logo} alt='logo' />
          </div>
          <h1 className='title'>347 Servicios Inmobiliarios</h1>
        </div>
        <h3 className='header-contacto'>347serviciosinmobiliarios@gmail.com</h3>
        <div className="nav__burguer">
          <div className="nav__burguer-line-1"></div>
          <div className="nav__burguer-line-2"></div>
          <div className="nav__burguer-line-3"></div> 
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Header;