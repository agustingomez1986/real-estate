import './contact-form.styles.scss';

const ContactForm = () => {
  return (
    <div>
      <form className='footer__form'>
        <fieldset>
          <legend className='legend'>Contactenos</legend>
          <div className='input-box'>
            <input className="input" type="text" name="name" placeholder="Nombre" maxLength="40" pattern="^([A-ZÑÇÁÉÍÓÚÜa-zñçáéíóúü\s]*)([A-ZÑÇÁÉÍÓÚÜa-zñçáéíóúü]+)(\s*){1,40}" title="El nombre solo debe contener letras" required data-tipo="nombreContacto" />
            <label className="label" htmlFor="name">Nombre</label>
          </div>
          <div className="textarea-box">
            <textarea className="textarea" name="mesaje" placeholder="Escribe tu mensaje" maxLength="120" required data-tipo="mensajeContacto"></textarea>
            <label className="label" htmlFor="mesaje">Mensaje</label>
          </div>
          <button className='footer-button'>Enviar mensaje</button>
        </fieldset>    
      </form>
    </div>
  )
}

export default ContactForm;