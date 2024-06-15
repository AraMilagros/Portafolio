import React from 'react'

// es otro modo de poder acceder a las imagenes
// en este basicamente esta apuntando a una carpeta donde estan todas las img de proyectos
// y en la linea 13, se usara la constante logo y se le pasara de parametro el nombre de la img
// que está en el archivo projects.json
const logo = require.context('../assets/img/proyectos', true);

export default function ItemExperience(props) {
    return (
        <div className="experiencie__item">
            {/* <!-- Pon el logotipo/captura de pantalla de tu proyecto --> */}
            <img className="experience__img" src={logo(props.logo)} alt="logo-projects" />
            <div className="experience__info">
                <h3 className="experience__title">{props.titulo}</h3>
                <h4 className="experience__text">{props.descripcion}</h4>
                <div className="experience__description">
                    {/* <!-- Pon el enlace del proyecto en Github o GithubPages --> */}
                    <span className="experience__repo">
                        <a href={props.repo} target="_blank">
                            <button className="experiencia__botao--repo">Repositorio</button>
                        </a>
                    </span>
                    <span className="experience__demo">
                        <a href={props.demolive} target='_blank'>
                            <button className="experience__botao--demo">Ver demo</button>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}
