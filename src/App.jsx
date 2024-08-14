import React from "react";
import './assets/css/index.css';
import { Route, Routes } from "react-router-dom";
import Menu from './components/Menu';
import NavMovil from './components/NavMovil';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Formacion from './pages/Formacion';
import Proyecto from './pages/Proyectos';
import Contacto from './pages/Contacto';
import NotFound from './pages/NoFound';

export default function App() {
    return(
        <main className="contenedor">
            {window.innerWidth < '1024' ? <NavMovil /> : <></>}
            {/* <NavMovil /> */}
            <Menu />
                <React.StrictMode>
                    <Routes>
                        <Route path="/" element={ <Home/> }/>
                        {/*<Route path="/skills" element={ <Skills/> } />
                        <Route path="/estudios" element={ <Formacion/> }/>
                        <Route path="/proyectos" element={ <Proyecto/> } />
                        <Route path="/contacto" element={ <Contacto/> } />
                        <Route path="/*" element={ <NotFound/> } /> */}
                    </Routes>
                </React.StrictMode>
        </main>
    )
}
