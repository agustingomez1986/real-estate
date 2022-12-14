import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import ContactForm from '../../components/contact-form/contact-form.component';
import Logo from '../../assets/logo-responsive-invert.png';

import './footer.styles.scss';

const Footer = () => {
  return (
    <Fragment>
      <Outlet />
      <div className='footer-container'>
        <div className='logo-footer-container'>
          <img className='logo-footer' src={Logo} alt='logo' />
        </div>
        <div className='data-container'>
          <ul className='footer__data__list'>
            <li>Maria Teresa Cortada</li>
            <li>Martillera, Corredora Pública y Corredora Inmobiliaria</li>
            <li>Matricula Nro. 347/COCICH</li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </Fragment>
  )
}

export default Footer;