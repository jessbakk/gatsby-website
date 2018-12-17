import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { Element, Link, animateScroll } from 'react-scroll'
import HomepageHeading from './HomepageHeading'
import InvestingContainer from './InvestingContainer'
import PropertiesScroller from './PropertiesScroller'
import FAQ from './FAQ'
import Disclaimer from './Disclaimer'
import ContactForm from './ContactForm'
import Background from '../images/beach.jpg'
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
} from 'semantic-ui-react'
import './DesktopContainer.module.css'

class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    animateScroll.scrollToTop();
  }


  render() {
    const { children } = this.props
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Segment className='full' inverted textAlign='center' style={{ minHeight: '100vh', padding: '1em 0em', backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundAttachment: 'fixed' }} vertical>
          <Menu className='animated fadeIn' style={{backgroundColor: 'rgba(255,255,255,.8)'}} fixed='top' size='huge' borderless>
            <Container>
              <Link onClick={this.scrollToTop} to="top"><Menu.Item >BARSHAY<Icon id='building-nav' size='large' name='building outline'/></Menu.Item></Link>
              <Link activeClass="active" to="investing"  spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}><Menu.Item>INVESTING</Menu.Item></Link>
              <Link activeClass="active" to="properties" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}><Menu.Item>PROPERTIES</Menu.Item></Link>
              <Link activeClass="active" to="faq" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}><Menu.Item>FAQ</Menu.Item></Link>
              <ContactForm />
              <Menu.Item id='facebook-nav' target='_blank' href='https://www.facebook.com/BarshayRealEstate'>
                <Icon size='large' name='facebook'></Icon>
              </Menu.Item>
              <Menu.Item id='instagram-nav' target='_blank' href='https://www.instagram.com/barshay_real_estate/'>
                <Icon size='large' name='instagram'></Icon>
              </Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading />
        </Segment>
        <Element name='investing'>
          <InvestingContainer />
        </Element>
        <Element name='properties' className='element'>
          <PropertiesScroller />
        </Element>
        <Element name='faq' className='element'>
          <FAQ />
        </Element>
        <Element name='disclaimer' className='element'>
          <Disclaimer />
        </Element>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer