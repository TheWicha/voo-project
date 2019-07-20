import React from 'react';
import './style.scss'
import img from '../../../images/voo.png'


function MenuLogo(props) {
  return (
    <div className='menu-header'>
      <h1>Menu</h1>
      <div className='menu-logo'>
        <img src={img} alt='voo logo' />
        <h3>Voo <span>favorites</span></h3>
      </div>
    </div>
  )
}


export default MenuLogo;
