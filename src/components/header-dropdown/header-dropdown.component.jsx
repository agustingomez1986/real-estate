import './header-dropdown.styles.scss';

import AboutUsImage from '../../assets/about-us.jpg';

export const HeaderDropdown = () => {
  return (
    <div className='header-dropdown-container'>
      <p className='dropdown-title'>EXPERIENCIA DE TRADICIÓN FAMILIAR</p>
      <h1 className='dropdown-aboutUs-title'>Quienes somos</h1>
      <img className='dropdown-image' src={AboutUsImage} alt='aboutUs' />
      <p className='dropdown-aboutUs'>Hay equipo!!! Padre e hija se unen. Grau, cuenta con 30 años de experiencia y trayectoria en el rubro. Maite, Corredora Inmobiliaria, Mat. 347/COCICH, con pasión por brindar servicio en gestion y emprender nuevos proyectos en la comarca.</p>
      <p className='dropdown-text'>Contactanos para acompañarte y asesorarte en cada etapa del proceso en tu proyecto inmobiliario, para que te sea mas fácil, agradable y menos lento y costoso logrando que tu experiencia sea satisfactoria.</p>
    </div>
  )
}

export default HeaderDropdown;