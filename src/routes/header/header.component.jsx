import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { HeaderContext } from '../../context/header.context';
import HeaderDropdown from '../../components/header-dropdown/header-dropdown.component';
import Logo from '../../assets/complete-logo.png';

import './header.styles.scss';
import HeaderArrowIcon from '../../components/header-arrow-icon/header-arrow-icon.component';

const Header = () => {
const { isHeaderOpen } = useContext(HeaderContext)

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
        {isHeaderOpen && <HeaderDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Header;