import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import img1 from '../assets/img/correo.png';

export default function Formulario() {

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
        btn.classList.add('exit');
        btn.innerHTML = "Email enviado !";
        setTimeout(() => {
            btn.classList.remove('exit');
            btn.innerHTML = "Enviar mensaje";
        }, 5000);

    }
//En esta funcion ocurre lo mismo que emailEnviado, solamente que es para el caso en que falle el envio
    const emailFallo = () => {
        const btn = document.getElementById('btn-submit');
        btn.classList.add('fail');
        btn.innerHTML = "Email NO enviado";
        setTimeout(() => {
            btn.classList.remove('fail');
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
            inputs[index].value='';
        }
    }


// en la linea 98 donde comienza el form, se tiene un atributo onSubmit que sera el encargado de llamar a la funcion para enviar el email
// luego en cada input hay un onChange encargado de capturar lo que el usuario ingrese y actualize los usestates creados al principio

    return (
        <div className="formcontacto" id="contacto">
            <div className="formcontacto--esquerda">
                <img className="formcontato__img" src={img1} alt="Imagen de talha khalil en Pixabay" />
            </div>

            <div className="formcontacto__text">
                <h2 className="formcontato__title">Contacto</h2>
                <h3 className="formcontato__subtext">¿Quieres contactarme?</h3>
                <h3 className="formcontato__subtext">Complete el siguiente formulario y me pondré en contacto con
                    usted lo antes posible. </h3>
                <form className="formcontato__form" name="form" onSubmit={handleSubmit}>
                    <div className="formcontacto__field">
                        <input id="inputName" className="formcontato__input" 
                            type="text" name="nombre" 
                            onChange={(e) => setNombre(e.target.value)}
                            pattern='^[a-zA-Z ]+${3,}' title="Sólo letras. Mínimo 3 letras."
                            required
                            />
                        <label>Nombre</label>
                    </div>
                    <div className="formcontacto__field">
                        <input id="inputEmail" className="formcontato__input" 
                            type="email" name="email"  
                            onChange={(e) => setEmail(e.target.value)} 
                            pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
                            title="Ingrese un email válido."
                            required
                            />
                        <label>Email</label>
                    </div>
                    <div className="formcontacto__field">
                        <input id="inputAsunto" className="formcontato__input" 
                            type="text" name="asunto" 
                            onChange={(e) => setAsunto(e.target.value)}
                            />
                        <label>Asunto</label>
                    </div>
                    <div className='formcontacto__field'>
                        <textarea className="formcontato__textarea formcontato__input" 
                            rows="5" cols="40" id="message" 
                            name="mensaje" 
                            onChange={(e) => setMensaje(e.target.value)} 
                            minLength="4"
                            required
                            ></textarea>
                        <label>Mensaje</label>
                        <span id="span-msj" className='alerta-msj'></span>
                    </div>

                    <button id="btn-submit" type="submit" className="formcontato__botao">Enviar mensaje</button>
                </form>
            </div>
        </div>
    )
}
