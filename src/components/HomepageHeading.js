import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'
import {
  Container,
  Header,
  Icon
} from 'semantic-ui-react'
import ScrollAnimation from 'react-animate-on-scroll'

const HomepageHeading = ({ mobile }) => (
  <ScrollAnimation animateIn="fadeIn" offset={0} animatePreScroll> 
    <Container text> 
      <Header
        as='h1'
        content='BARSHAY CAPITAL'
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'bolder',
          textShadow: '4px 4px 4px rgba(255, 255, 255, .4)',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
        }}
    />
    </Container>
      <Header
        as='h2'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          textShadow: '2px 2px 2px rgba(255, 255, 255, .5)',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      >
        <ScrollAnimation style={{display: 'inline-block'}} animateIn="fadeIn" delay={500} animatePreScroll>{slogan[0]}&nbsp;&nbsp;</ScrollAnimation>
        <ScrollAnimation style={{display: 'inline-block'}} animateIn="fadeIn" delay={1500} animatePreScroll>|&nbsp;{slogan[1]}&nbsp;&nbsp;</ScrollAnimation>
        <ScrollAnimation style={{display: 'inline-block'}} animateIn="fadeIn" delay={2500} animatePreScroll>|&nbsp;{slogan[2]}&nbsp;&nbsp;</ScrollAnimation>
      </Header>
      <ScrollAnimation animateIn="fadeInDown" delay={3500}> 
        <Link activeClass="active" to="investing" spy={true} smooth={true} duration={500}>
          <Icon id='down-arrow' size='huge' name='angle double down' />
        </Link>
      </ScrollAnimation>
    
  </ScrollAnimation>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading

const slogan = ['Diversify Your Portfolio', 'Expand Your Networth', 'Protect Your Capital']