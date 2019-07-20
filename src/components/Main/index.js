import React from 'react';
import './style.scss'
import Header from '../Header'
import About from '../About';
import Menu from '../Menu';

function Main(props) {
  return (
    <main className='full-page-wrapper'>
      <Header />
      <About />
      <Menu />
    </main>
  )
}

export default Main;
