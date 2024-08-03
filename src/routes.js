import PaginaBase from './pages/PaginaBase';
import Home from './pages/Home';
import Skill from './pages/Skills';
import Formacion from './pages/Formacion';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';
import NotFound from './pages/NoFound';

import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <PaginaBase/> }>
                    <Route path="" element={ <Home /> }/>
                    <Route path="skills" element={ <Skill/> } />
                    <Route path='estudios' element={ <Formacion /> }/>
                    <Route path='proyectos' element={ <Proyectos /> } />
                    <Route path='contacto' element={ <Contacto />  } />
                    <Route path='*' element={ <NotFound/> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}