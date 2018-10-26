import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import HomepageHeading from './HomepageHeading'
import Background from '../images/Manhattan-Beach-Pier.jpg'
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
} from 'semantic-ui-react'

class DesktopContainer extends Component {
  render() {
    const { children } = this.props
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: '100vh', padding: '1em 0em', backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundAttachment: 'fixed' }}
          vertical
        >
          <Menu
            style={{backgroundColor: 'rgba(255,255,255,.9)'}}
            fixed={'top'}
            size='large'
            borderless
          >
            <Container>
              <Menu.Item><Icon size='large' name='building outline'/></Menu.Item>
              <Menu.Item as='a' active>Investing With Us</Menu.Item>
              <Menu.Item as='a'>Properties</Menu.Item>
              <Menu.Item as='a'>Investment Criteria</Menu.Item>
              <Menu.Item as='a'>FAQ</Menu.Item>
              <Menu.Item position='right'>
                <Button as='a' style={{ marginLeft: '0.5em' }}>
                  Contact
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading />
        </Segment>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer