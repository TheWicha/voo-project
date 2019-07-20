import React from 'react';
import './style.scss'
import menu from './menu'
import MenuBox from './MenuBox';
import MenuLogo from './MenuLogo'
import id from 'shortid'


function Menu(props) {
  return (
    <section className='menu'>
      <div className='menu-section-wrapper'>
        <MenuLogo />
        <div className='menu-wrapper'>
          {menu.map(m => (
            <MenuBox
              key={id.generate()}
              item={m.item}
              price={m.price}
              ingredients={m.ingredients}
            />
          ))}
        </div>
      </div>
    </section>
  )
}




export default Menu;
