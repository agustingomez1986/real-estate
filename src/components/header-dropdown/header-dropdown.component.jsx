import './header-dropdown.styles.scss';

import AboutUsImage from '../../assets/about-us.jpg';

export const HeaderDropdown = () => {
  return (
    <div className='header-dropdown-container'>
      <div className='dropdown-title-container'>
        <p className='dropdown-title1'>EXPERIENCIA DE</p>
        <p className='dropdown-title2'>TRADICION</p>
        <p className='dropdown-title3'>FAMILIAR</p>
      </div>
      <div className='dropdown-aboutUs-container'>
        <h1 className='dropdown-aboutUs-title'>Quienes somos</h1>
        <p className='dropdown-aboutUs-text'>Hay equipo!!! Grau, padre, 30 años de experiencia y trayectoria en el rubro, junto con Maite, hija, pasión por emprender nuevos proyectos en la comarca.</p>
      </div>
      <img className='dropdown-image' src={AboutUsImage} alt='aboutUs' />
      <p className='dropdown-text'>Contactanos para acompañarte y asesorarte en cada etapa del proceso en tu proyecto inmobiliario, para  que te sea mas fácil, agradable y menos lento y costoso logrando que tu experiencia sea satisfactoria.</p>
    </div>
  )
}

export default HeaderDropdown;