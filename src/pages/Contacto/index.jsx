import React from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser';

import estilos from './estilos.module.css';

export default function index() {

  // se crearon 4 constantes para guardar los datos que el usuario ingrese por medio del formulario 
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // datos necesarios para utilizar emailjs
    // las mismas se encuentran en su pagina
    const serviceId = 'service_nbkbzps';
    const templateId = 'template_56cbipb';
    const publicKey = 'gHkMh5o6PgSxBlLcG';

    // aqui asignaremos los datos ingresados por el usuario que fueron guardados, a su vez,
    // en las constantes creadas más arriba
    const templateParams = {
      from_name: nombre,
      from_email: email,
      subject: asunto,
      to_name: 'Ara Palenque',
      message: mensaje,
    };

    // ahora utilizando el objeto que importamos de emailjs, con el metodo send (que recibe varios parametros)
    // enviamos los datos guardados anteriormente: como los dados por el mismo emailjs (al crearse una cuenta)
    // y los datos dados por el usuario (que ahora estan en templateParams)
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('correo enviado', response);
        emailEnviado();
        console.log("llego despues de emailEnviado")
        limpiar();
      })
      .catch((err) => {
        console.error('Error. No se envió', err);
        emailFallo();
        limpiar();
      });

  }

  // esta funcion es solo para cambiar el estilo del boton del Formulario
  // en caso de que el email se enviara sin problemas, se cambiará el color a un verde
  // al igual que el mensaje del boton cambiará a "Email enviado"
  // Este cambio solo durara 5 segundos. Por ello el uso de setTimeout
  // una vez que pase los 5segundos, el boton volvera a su color y mensaje original
  const emailEnviado = () => {
    const btn = document.getElementById('btn-submit');
    btn.style.background='rgb(138, 204, 138)';
    btn.innerHTML = "Email enviado !";
    setTimeout(() => {
      btn.style.background='#f07a9c';
      btn.innerHTML = "Enviar mensaje";
    }, 5000);

  }
  //En esta funcion ocurre lo mismo que emailEnviado, solamente que es para el caso en que falle el envio
  const emailFallo = () => {
    const btn = document.getElementById('btn-submit');
    btn.classList.add('fail');
    btn.style.background='rgb(209, 80, 80)';
    btn.innerHTML = "Email NO enviado";
    setTimeout(() => {
      btn.style.background='#f07a9c';
      btn.innerHTML = "Enviar mensaje";
    }, 5000);

  }

  // esta funcion se utilizara para limpiar los campos en donde el usuario ingreso sus datos
  const limpiar = () => {
    setNombre('');
    setEmail('');
    setAsunto('');
    setMensaje('');

    const inputs = document.querySelectorAll('.formcontato__input');

    for (let index = 0; index < inputs.length; index++) {
      console.log(inputs[index].value);
      inputs[index].value = '';
    }
  }


  // en la linea donde comienza el form, se tiene un atributo onSubmit que sera el encargado de llamar a la funcion para enviar el email
  // luego en cada input hay un onChange encargado de capturar lo que el usuario ingrese y actualize los usestates creados al principio

  return (
    <div className={estilos.contenedor} id="contacto">
      {/* <div className="formcontacto--esquerda">
        <img className="formcontato__img" src={img1} alt="Imagen de talha khalil en Pixabay" />
      </div> */}

      <div className={estilos.formcontacto__text}>
        <h3 className={estilos.formcontacto__title}>Contacto</h3>
        <h4 className={estilos.formcontacto__subtext}>¿Quieres contactarme?</h4>
        
        <form className={estilos.formcontacto__form} name="form" onSubmit={handleSubmit}>
          <div className={estilos.formcontacto__field}>
            <label>Nombre</label>
            <input id={estilos.inputName} className="formcontato__input"
              type="text" name="nombre"
              autoComplete='off'
              placeholder='Por ej.: Cosme Fulanito'
              onChange={(e) => setNombre(e.target.value)}
              pattern='^[a-zA-Z ]+${3,}' title="Sólo letras. Mínimo 3 letras."
              required
            />

          </div>
          <div className={estilos.formcontacto__field}>
            <label>Email</label>
            <input id={estilos.inputEmail} className="formcontato__input"
              type="email" name="email"
              autoComplete='off'
              placeholder='Por ej.: cosmefulanito@gmail.com'
              onChange={(e) => setEmail(e.target.value)}
              pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
              title="Ingrese un email válido."
              required
            />

          </div>
          <div className={estilos.formcontacto__field}>
            <label>Asunto</label>
            <input id={estilos.inputAsunto} className="formcontato__input"
              type="text" name="asunto"
              autoComplete='off'
              placeholder='Asunto a tratar'
              onChange={(e) => setAsunto(e.target.value)}
            />

          </div>
          <div className={estilos.formcontacto__field}>
            <label>Mensaje</label>
            <textarea className="formcontato__textarea formcontato__input"
              rows="8" cols="40" id={estilos.message}
              name="mensaje"
              onChange={(e) => setMensaje(e.target.value)}
              minLength="4"
              required
            ></textarea>

            <span id="span-msj" className='alerta-msj'></span>
          </div>

          <button id="btn-submit" type="submit" className={estilos.formcontato__btn}>Enviar mensaje</button>
        </form>
      </div>
    </div>
  )
}
