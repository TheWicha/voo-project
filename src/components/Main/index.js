import React, { Component } from 'react';
import './style.css'
import Header from '../Header'
import About from '../About';
import Menu from '../Menu';
import $ from 'jquery';
import Locations from '../Locations';
import Footer from '../Footer';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isInMove: false,
      activeIndex: 0,
      startAboutAnimation: false,
      startLocationAnimation: false,
      startMenuAnimation: false,
      mobileActtive: false,
    };

    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleOpenMobiNavi = this.handleOpenMobiNavi.bind(this);
    this.handleMobiNavi = this.handleMobiNavi.bind(this);
    this.sections = {};
    this.setRef = (sectionElement) => element => {
      this.sections = { ...this.sections, [sectionElement]: element }
    };
  }

  componentDidMount() {
    this.handleLinkChange()
    window.addEventListener('scroll', this.handleColorChange, { passive: true });
    window.addEventListener('scroll', this.handleLinkChange, { passive: true });

    $(document).ready(function () {
      $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
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
    window.removeEventListener('scroll', this.handleLinkChange);
  };

  handleColorChange() {
    if (window.scrollY > 55) {
      return this.setState({ isInMove: true });
    };
    return this.setState({ isInMove: false });
  };

  handleMobiNavi() {
    this.setState({ mobileActtive: !this.state.mobileActtive })
  }
  handleOpenMobiNavi() {
    this.setState({ mobileActtive: false })
  }

  handleLinkChange() {
    const homeSection = this.sections.home
    const homeHeight = homeSection.offsetHeight

    const aboutSection = this.sections.about
    const aboutHeight = homeHeight + aboutSection.offsetHeight

    const menuSection = this.sections.menu
    const menuHeight = aboutHeight + menuSection.offsetHeight

    const locationsSection = this.sections.locations
    const locationsHeight = menuHeight + locationsSection.offsetHeight

    const footerSection = this.sections.footer
    const footerHeight = locationsHeight + footerSection.offsetHeight


    if (window.pageYOffset >= 0 && window.pageYOffset < (homeHeight - 150)) {
      if (window.pageYOffset > homeHeight / 3) {
        return this.setState({ startAboutAnimation: true })
      }
      return this.setState({ activeIndex: 0 })
    }
    if (window.pageYOffset >= (homeHeight - 150) && window.pageYOffset < (aboutHeight - 150)) {
      if (window.pageYOffset >= (aboutHeight - 400)) {
        return this.setState({ startMenuAnimation: true })
      }
      return this.setState({ activeIndex: 1, })
    }

    if (window.pageYOffset >= (aboutHeight - 150) && window.pageYOffset < (menuHeight - 150)) {
      return this.setState({ activeIndex: 2 })
    }

    if (window.pageYOffset >= (menuHeight - 150) && window.pageYOffset < locationsHeight - 150) {
      if (window.pageYOffset >= (menuHeight + 50)) {
        this.setState({ startLocationAnimation: true })
      }
      return this.setState({ activeIndex: 3 })
    }
    if (window.pageYOffset >= (locationsHeight - 150) && window.pageYOffset < footerHeight) {
      return this.setState({ activeIndex: 4 })
    }

    return this.setState({ activeIndex: null })
  }


  render() {
    const { isInMove, activeIndex, startAboutAnimation, startLocationAnimation, startMenuAnimation, mobileActtive } = this.state;
    return (

      <main className='full-page-wrapper'>
        <Header
          mobileActtive={mobileActtive}
          handleOpenMobiNavi={this.handleOpenMobiNavi}
          handleMobiNavi={this.handleMobiNavi}
          activeIndex={activeIndex}
          isInMove={isInMove}
          setRef={this.setRef}
        />
        <About
          startAnimation={startAboutAnimation}
          setRef={this.setRef}
        />
        <Menu
          setRef={this.setRef}
          startAnimation={startMenuAnimation}
        />
        <Locations
          setRef={this.setRef}
          startAnimation={startLocationAnimation}
        />
        <Footer
          setRef={this.setRef}
        />
      </main>
    )
  }
}

export default Main;
