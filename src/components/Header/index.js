import React, { Component } from 'react';
import './style.scss'
import Welcome from './Welcome'
import Navbar from './Navbar';
import backgrounds from './backgrounds';

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIteration: 0,
      currentImg: backgrounds[0].url,
      imgTwo: backgrounds[0].url,
    }
  }

  componentDidMount() {
    this.caruselInterval = setInterval(() => {
      const animatedHeader = document.querySelector('.header')

      animatedHeader.classList.remove('one-transition')
      animatedHeader.classList.add('zero-transition')
      animatedHeader.style.opacity = 0;

      this.setState((state) => {
        let { currentIteration } = state
        if (currentIteration === (backgrounds.length - 1)) {
          return {
            currentIteration: 0,
            currentImg: backgrounds[0].url,
            imgTwo: state.currentImg
          }

        }
        return { currentIteration: currentIteration + 1, currentImg: backgrounds[currentIteration + 1].url, imgTwo: backgrounds[currentIteration].url }
      })
    }, 10000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentIteration !== this.state.currentIteration) {
      const animatedHeader = document.querySelector('.header')


      setTimeout(() => {
        animatedHeader.classList.remove('zero-transition')
        animatedHeader.classList.add('one-transition')
        animatedHeader.style.opacity = 1;
      }, 1000)
    }
  }


  renderHeaderSection = (currentImg) => {
    const headerStyle = {
      opacity: 0,
      backgroundImage:
        `linear-gradient(to bottom, 
          rgba(22, 22, 22, 4.3) 0, 
          rgba(255, 255, 255, -1) 48.4%), 
          url(${currentImg})`
    }
    return <section className='header' style={headerStyle} />
  }

  render() {
    const { currentImg, imgTwo } = this.state
    
    const headerBack = {
      backgroundImage:
        `linear-gradient(to bottom, 
          rgba(22, 22, 22, 4.3) 0, 
          rgba(255, 255, 255, -1) 48.4%), 
          url(${imgTwo})`
    }

    return (
      <div className='header-back' style={headerBack}>
        {this.renderHeaderSection(currentImg)}
        <section className='header-welcome'>
          <div className='header-container'>
            <Navbar />
            <Welcome />
          </div>
        </section>
      </div>
    )
  }
}

export default Header;

