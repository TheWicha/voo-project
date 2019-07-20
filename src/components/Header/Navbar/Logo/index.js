import React from 'react';
import './style.scss'
import img from '../../../../images/voo.png'

function Logo(props) {
  return (
    <div className="logo">
      <img src={img} alt="Voo logo " />
      <h1>Voo STREETFOOD</h1>
    </div>
  )
}

export default Logo;