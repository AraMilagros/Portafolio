import Menu from "../../components/Menu";
import Contenedor from "../../components/Contenedor"
import Footer from '../../components/Footer';

import { Outlet } from "react-router-dom"
import estilos from './estilos.module.css';
export default function index() {
  return (
      <main className={estilos.contenedor}>
        <Menu />
        <Contenedor>
          <Outlet />
        </Contenedor>
      </main>
  )
}
