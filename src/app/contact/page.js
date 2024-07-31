import '../styles/contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contactanos!</h1>
      <div className="contact-form">
        <div className='input-field'>
          <label htmlFor="name">Nombre</label>
          <input type="text" placeholder="Nombre" id="name" required/>
        </div>
        <div className='input-field'>
          <label htmlFor="email">Correo electronico</label>
          <input type="text" placeholder="Correo electronico" id="email" required/>
        </div>
        <div className='input-field'>  
          <label htmlFor="msg">Mensaje</label>
          <textarea id="msg" style={{resize: "none"}} rows={8} cols={40}></textarea>
        </div>
        <button className='send-btn'>Enviar</button>
      </div>
    </div>
  );
}
  