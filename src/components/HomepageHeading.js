import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'
import {
  Container,
  Header,
  Icon
} from 'semantic-ui-react'

const HomepageHeading = ({ mobile }) => (
  <Container text>
      <Header
        as='h1'
        content='BARSHAY CAPITAL'
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
        }}
    />
    <Header
      as='h2'
      content='Do whatever you want when you want to.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Link activeClass="active" to="investing" spy={true} smooth={true} duration={500}>
      <Icon id='down-arrow' size='huge' name='angle double down' />
    </Link>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading