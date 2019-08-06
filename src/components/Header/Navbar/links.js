import id from 'shortid'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUtensils, faMapMarker, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default [
  {
    icon: <FontAwesomeIcon icon={faHome} />,
    name: 'home',
    href: '#home',
    id: id.generate(),
  },
  {
    icon: <FontAwesomeIcon icon={faInfoCircle} />,
    name: 'about us',
    href: '#about-us',
    id: id.generate(),
  },
  {
    icon: <FontAwesomeIcon icon={faUtensils} />,
    name: 'menu',
    href: '#menu',
    id: id.generate(),
  },
  {
    icon: <FontAwesomeIcon icon={faMapMarker} />,
    name: 'locations',
    href: '#locations',
    id: id.generate(),
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    name: 'contact',
    href: '#footer',
    id: id.generate(),
  },
]