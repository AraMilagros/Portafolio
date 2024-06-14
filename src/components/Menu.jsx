import React from 'react'

// funcion necesaria para la vista movil
// lo que hara sera cerrar el menu desplegado
// primero es llamado por un evento click, se captura el elemento por medio de su id
// y luego utilizando la constante donde se guardo el elemento, se removerá la clase 'active'
// y por ultimo se le dara un display none al icono-close que es una x al final del menu desplegado
const cerrarMenu = () => {
    console.log("cerrar");
    const menu = document.getElementById('listamenu');
    menu.classList.remove('active');
    const iconClose = document.getElementById('close');
    iconClose.style.display="";
    iconClose.style.display="none";
    iconClose.style.position="none";
}

// funcion solo para la vista movil
// se capturara el elemento tras un evento click, se lo hara por medio de su id
// y a diferencia de la funcion anterior, esta vez se agregará la clase 'active' necesaria para visualizar el menu
// y finalmente se le dara al icono de close, un display de block para poder ser visualizado
const abrirMenu = () => {
    console.log("abrir");
    const menu = document.getElementById('listamenu');
    menu.classList.add('active');
    const iconClose = document.getElementById('close');
    iconClose.style.display="";
    iconClose.style.display="block";
}


export default function Menu() {
    return (
        <section id="home" className="menu">
            <header className="menu__header">           
                <i className="fa-brands fa-web-awesome"></i>
                <h3 className="menu__title">AraMilagros</h3>
            </header>
            <nav>
                <ul id="listamenu" className="menu__list">
                    <li className="menu__list__item"><a href="#sobre-mi">Sobre mi</a></li>
                    <li className="menu__list__item"><a href="#all-skills">Skills</a></li>
                    <li className="menu__list__item"><a href="#formacion">Formación</a></li>
                    <li className="menu__list__item"><a href="#xp">Proyectos</a></li>
                    <li className="menu__list__item"><a href="#contacto">Contáctame</a></li>
                </ul>
                {/* estos dos ultimos div solo son visualizados en vistas moviles 
                    corresponden a iconos para poder abrir y cerrar el menu
                */}
                <div id='icon-menu'>
                    <i id="menu-open" className="fa-solid fa-bars" onClick={abrirMenu}></i>
                </div>

                <div id='close'>
                    <i id="menu-close" className="fa-solid fa-xmark" onClick={cerrarMenu}></i>
                </div>

            </nav>
        </section>
    );
}
