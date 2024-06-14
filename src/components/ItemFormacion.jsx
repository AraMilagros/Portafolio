import React from 'react'
const logo = require.context('../assets/img/formacion', true);
export default function ItemFormacion(props) {
   
    return (
        <div className="academic__courses__box">
            <ul className="academic__courses__list">
                {/* <!--Pon el logotipo de la institución de formación --> */}
                <li className="academic__courses__item__img"><img src={logo(props.logo)} alt="logo-formacion" /></li>
                <li className="academic__courses__item__title">
                    <h4>{props.titulo}</h4>
                </li>
                <li className="academic__courses__item__subtitle">
                    <p>{props.descripcion}</p>
                </li>
            </ul>
        </div>
    )
}
