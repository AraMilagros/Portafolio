import React from 'react'

import estilos from './estilos.module.css';

import Menu from '../../components/Menu';
import Home from '../../components/Home';
export default function index() {
  return (
    <div className={estilos.contenedor}>
        <Menu />
        <Home />
    </div>
  )
}
