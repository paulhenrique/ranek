import React from 'react'
import style from './style.module.scss';
import foto from '../../assets/img/contato.jpg';
import Head from '../Head';
function Contato() {
  return (
    <section className={style.contato + ' animeLeft'}>
      <Head title="Contato" description="Página de contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul>
          <li>phvcandido@gmail.com</li>
          <li>99999-9999</li>
          <li>Rua Ali Perto, 999</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato
