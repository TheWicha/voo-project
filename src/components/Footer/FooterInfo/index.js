import React from 'react';


function FooterInfo(props) {
  const links = [
    'https://unsplash.com/photos/gv_XRp4dUqM',
    'https://unsplash.com/photos/S-de8PboZmI',
    "https://unsplash.com/photos/fFJYpTrkuuM",
    'https://unsplash.com/photos/Pt_YmiYm7a4',
    'https://unsplash.com/photos/4_jhDO54BYg',
    'https://unsplash.com/photos/50KffXbjIOg',
    'https://unsplash.com/photos/0fkZ8vRKZnQ',
    'https://unsplash.com/photos/Djs02AtkOm4',
    'https://unsplash.com/photos/Yr4n8O_3UPc',
    'https://unsplash.com/photos/MNtag_eXMKw',
    'https://unsplash.com/photos/Hn_GXIIoJ5s',
    'https://unsplash.com/photos/vi0kZuoe0-8',
    'https://unsplash.com/photos/abT5N6GC-a4',
  ]

  return (
    <div className='footer-info'>
      <br />
      <div className='footer-info-dev'>
        <p>
          2019 All Rights Reserved. Developed by <a href='https://github.com/TheWicha' target='blank'>Daniel Wiśniewski</a>
        </p>
        <p>
          I made this site using phenomenal tools like <a href='http://animista.net/' target='blank'>Animista</a> and <a href='https://code.visualstudio.com/'>VSCode</a>
        </p>
      </div>
      <div className='footer-info-photo'>
        <p>
          All photos are from <a href='https://unsplash.com/'>Unsplash</a>
        </p>
        <ul>
          {links.map((link, i) =>(
            <li key={i}>
              <a href={link} target='blank'>Photo {i+1}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FooterInfo