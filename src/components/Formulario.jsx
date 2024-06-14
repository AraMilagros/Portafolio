import React from 'react'
import img from '../assets/img/email2.png';

export default function Formulario() {
    return (
        <div className="formcontacto" id="contacto">
            <div className="formcontacto--esquerda">
                <img class="formcontato__img" src={img} alt="logo-email" />
            </div>

            <div className="formcontacto__text">
                <h2 className="formcontato__title">Contacto</h2>
                <h3 className="formcontato__subtext">¿Quieres contactarme?</h3>
                <h3 className="formcontato__subtext">Complete el siguiente formulario y me pondré en contacto con
                    usted lo antes posible. </h3>
                <form className="formcontato__form" name="form">
                    <div className="formcontacto__field">
                        <input className="formcontato__input" type="text" name="nombre" />
                        <label>Nombre</label>
                    </div>
                    <div className="formcontacto__field">
                        <input className="formcontato__input" type="email" name="email" />
                        <label>Email</label>
                    </div>
                    <div className="formcontacto__field">
                        <input className="formcontato__input" type="text" name="asunto" />
                        <label>Asunto</label>
                    </div>
                    <textarea className="formcontato__textarea" rows="5" cols="40" id="mensagem" name="mensaje"
                        placeholder="Mensaje"></textarea>
                    
                    <button type="submit" class="formcontato__botao">Enviar mensaje</button>
                </form>
            </div>
        </div>
    )
}
