import React, { Component } from 'react';
import './style.scss'
import menu from './menu'
import MenuBox from './MenuBox';
import MenuLogo from './MenuLogo'


class Menu extends Component {

  setRef(sectionName) {
    return this.props.setRef(sectionName)
  }


  render() {
    return (
      <section id='menu' className='menu' ref={this.setRef('menu')}>
        <div className='menu-section-wrapper'>
          <MenuLogo />
          <div className='menu-wrapper'>
            {menu.map((m, i) => (
              <MenuBox
                startAnimation={this.props.startAnimation}
                index={i}
                key={m.id}
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
}




export default Menu;
