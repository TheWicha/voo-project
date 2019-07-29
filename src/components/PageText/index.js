import React from 'react';
import img from '../../images/voo.png'
import propTypes from 'prop-types'

function PageText(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={img} alt='Voo logo' />
      <p>
        {props.text}
      </p>
    </div>
  )
}

PageText.propTypes = {
  title: propTypes.string.isRequired,
  text: propTypes.object.isRequired,
}


export default PageText