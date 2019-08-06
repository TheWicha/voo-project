import id from 'shortid';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faTwitter, faInstagram, faPinterest, faYoutube} from "@fortawesome/free-brands-svg-icons";

export default [
  { 
    id: id.generate(),
    icon:<FontAwesomeIcon icon={faFacebookF}/>,
    name: 'Facebook',
    href: 'https://www.facebook.com',
  },
  {
    id: id.generate(),
    icon:<FontAwesomeIcon icon={faTwitter}/>,
    name: 'Twitter',
    href: 'https://twitter.com',
  },
  {
    id: id.generate(),
    icon:<FontAwesomeIcon icon={faInstagram}/>,
    name: 'Instagram',
    href: 'https://instagram.com',
  },
  {
    id: id.generate(),
    icon:<FontAwesomeIcon icon={faPinterest}/>,
    name: 'Pinterest',
    href: 'https://pinterest.com',
  },
  {
    id: id.generate(),
    icon:<FontAwesomeIcon icon={faYoutube}/>,
    name: 'Youtube',
    href: 'https://youtube.com',
  },
]