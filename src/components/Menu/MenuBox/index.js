import React, { Component } from 'react';
import propTypes from 'prop-types'
import './style.scss'


class MenuBox extends Component {

  render() {
    const { index, startAnimation, item, price, ingredients } = this.props
    return (
      <div className={startAnimation ? `menu-box box-menu${index}` : 'menu-box'}>
        <div className='item-wrapper'>
          <h4 className='item'>{item}</h4>
          <h4 className='price'>{price}</h4>
        </div>
        <p className='ingredients'>{ingredients}</p>
      </div>
    )
  }
}

MenuBox.propTypes = {
  startAnimation: propTypes.bool.isRequired,
  index: propTypes.number.isRequired,
  item: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  ingredients: propTypes.string.isRequired
}

export default MenuBox;
