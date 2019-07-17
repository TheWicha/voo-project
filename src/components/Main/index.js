import React from 'react';
import './style.scss'
import Header from '../Header'
import About from '../About';

function Main(props) {
  return (
    <main className='full-page-wrapper'>
      <Header />
      <About />
    </main>
  )
}

export default Main;