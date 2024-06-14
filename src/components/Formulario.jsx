import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import img from '../assets/img/email2.png';

export default function Formulario() {


    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_nbkbzps';
        const templateId = 'template_56cbipb';
        const publicKey = 'gHkMh5o6PgSxBlLcG';


        const templateParams = {
            from_name: nombre,
            from_email: email,
            subject: asunto,
            to_name: 'Ara Palenque',
            message: mensaje,
        };

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

    const emailEnviado = () => {
        const btn = document.getElementById('btn-submit');
        btn.classList.add('exit');
        btn.innerHTML = "Email enviado !";
        setTimeout(() => {
            btn.classList.remove('exit');
            btn.innerHTML = "Enviar mensaje";
        }, 5000);

    }

    const emailFallo = () => {
        const btn = document.getElementById('btn-submit');
        btn.classList.add('fail');
        btn.innerHTML = "Email NO enviado";
        setTimeout(() => {
            btn.classList.remove('fail');
            btn.innerHTML = "Enviar mensaje";
        }, 5000);

    }

    const limpiar = () => {
        setNombre('');
        setEmail('');
        setAsunto('');
        setMensaje('');
    }

    return (
        <div className="formcontacto" id="contacto">
            <div className="formcontacto--esquerda">
                <img className="formcontato__img" src={img} alt="logo-email" />
            </div>

            <div className="formcontacto__text">
                <h2 className="formcontato__title">Contacto</h2>
                <h3 className="formcontato__subtext">¿Quieres contactarme?</h3>
                <h3 className="formcontato__subtext">Complete el siguiente formulario y me pondré en contacto con
                    usted lo antes posible. </h3>
                <form className="formcontato__form" name="form" onSubmit={handleSubmit}>
                    <div className="formcontacto__field">
                        <input className="formcontato__input" type="text" name="nombre" onChange={(e) => setNombre(e.target.value)} />
                        <label>Nombre</label>
                    </div>
                    <div className="formcontacto__field">
                        <input className="formcontato__input" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        <label>Email</label>
                    </div>
                    <div className="formcontacto__field">
                        <input className="formcontato__input" type="text" name="asunto" onChange={(e) => setAsunto(e.target.value)} />
                        <label>Asunto</label>
                    </div>
                    <div className='formcontacto__field'>
                        <textarea className="formcontato__textarea" rows="5" cols="40" id="mensagem" name="mensaje" onChange={(e) => setMensaje(e.target.value)}></textarea>
                        <label>Mensaje</label>
                    </div>


                    <button id="btn-submit" type="submit" className="formcontato__botao">Enviar mensaje</button>
                </form>
            </div>
        </div>
    )
}
