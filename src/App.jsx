import React from 'react'

import Menu from './components/Menu'
import Header from './components/Header';
import SobreMi from './components/SobreMi';

import Skills from './components/ContainerSkill';
import Formacion from './components/ContainerFormacion';
import Experience from './components/ContainerExperience';
import Formulario from './components/Formulario';
import Footer from './components/Footer';

// listas en formato json para informacion sobre habilidades blandas/duras, formaciones y proyectos realizados
import hardSkill from './assets/json/hardskill.json';
import softSkill from './assets/json/softskill.json';
import formaciones from './assets/json/formacion.json';
import projects from './assets/json/projects.json';

import FlechaUp from './components/Up';
// link donde estan los estilos css
import './assets/css/estilos.css'

export default function App() {
    return (
        <main>
            <Menu />
            <Header />
            
            <SobreMi />
            <hr />
            <div className='skills'>
                <Skills lista={hardSkill} titulo="Hard Skill" />
                <Skills lista={softSkill} titulo="Soft Skill" />
            </div>
            <div className='academic'>
                <Formacion lista = {formaciones} titulo="Formación académica"/>  
            </div>

            <Experience lista = {projects} titulo="Proyectos realizados" />
            
            <Formulario />

            <Footer />

            <FlechaUp />
        </main>
    )
}