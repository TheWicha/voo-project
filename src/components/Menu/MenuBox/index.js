import React from 'react';
import propTypes from 'prop-types'
import './style.scss'


function MenuBox(props) {
  return (
    <div className='menu-box'>
      <div className='item-wrapper'>
        <h4 className='item'>{props.item}</h4>
        <h4 className='price'>{props.price}</h4>
      </div>
      <p className='ingredients'>{props.ingredients}</p>
    </div>
  )
}

MenuBox.propTypes = {
  item: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  ingredients: propTypes.string.isRequired
}

export default MenuBox;
