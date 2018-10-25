import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import HomepageHeading from './HomepageHeading'
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from 'semantic-ui-react'

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={'top'}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>Investing With Us</Menu.Item>
                <Menu.Item as='a'>Properties</Menu.Item>
                <Menu.Item as='a'>Investment Criteria</Menu.Item>
                <Menu.Item as='a'>FAQ</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Contact
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer