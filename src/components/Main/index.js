import React, { Component } from 'react';
import './style.scss'
import Header from '../Header'
import About from '../About';
import Menu from '../Menu';
import $ from 'jquery';
import Locations from '../Locations';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isInMove: false,
      activeIndex: 0,
    };

    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.sections = {};
    this.setRef = (sectionElement) => element => {
    this.sections = { ...this.sections, [sectionElement]: element }
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleColorChange);
    window.addEventListener('scroll', this.handleLinkChange);

    $(document).ready(function () {
      $('a[href^="#"]').on('click', function (e) {
        let target = this.hash;
        let $target = $(target);
        $('html, body').animate({
          'scrollTop': $target.offset().top
        }, 700, 'swing')
      })
    })
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleColorChange);
  };

  handleColorChange() {
    if (window.scrollY > 55) {
      return this.setState({ isInMove: true });
    };
    return this.setState({ isInMove: false });

  };

  handleLinkChange() {
    const homeSection = this.sections.home
    const homeHeight = homeSection.offsetHeight

    const aboutSection = this.sections.about
    const aboutHeight = homeHeight + aboutSection.offsetHeight

    const menuSection = this.sections.menu
    const menuHeight = aboutHeight + menuSection.offsetHeight

    const locationsSection = this.sections.locations
    const locationsHeight = menuHeight + locationsSection.offsetHeight


    if (window.pageYOffset >= 0 && window.pageYOffset < homeHeight) {
      return this.setState({ activeIndex: 0 })
    }
    if (window.pageYOffset >= homeHeight && window.pageYOffset < aboutHeight) {
      return this.setState({ activeIndex: 1 })
    }

    if (window.pageYOffset >= aboutHeight && window.pageYOffset < menuHeight) {
      return this.setState({ activeIndex: 2 })
    }

    if (window.pageYOffset >= menuHeight && window.pageYOffset < locationsHeight) {
      return this.setState({ activeIndex: 3 })
    }

    return this.setState({ activeIndex: null })
  }


  render() {
    const { isInMove, activeIndex } = this.state;
    return (

      <main className='full-page-wrapper'>
        <Header
          activeIndex={activeIndex}
          isInMove={isInMove}
          setRef={this.setRef}
        />
        <About
          setRef={this.setRef}
        />
        <Menu
          setRef={this.setRef}
        />
        <Locations
          setRef={this.setRef}
        />
      </main>
    )
  }
}

export default Main;
