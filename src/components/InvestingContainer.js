import React from 'react'
import { Container, Menu, Segment } from 'semantic-ui-react'
import Investing from './Investing'
import Mission from './Mission'
import Criteria from './Criteria'
import WhyApartments from './WhyApartments'
import WhySouthBay from './WhySouthBay'

class InvestingContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: <Investing />,
      activeItem: 'investing_with_us'
    }
  }

  handleClick = (e) => {
    let button = e.target.id
    if (button === 'our_mission') {
      this.setState({view: <Mission />, activeItem: 'our_mission'})
    } else if (button === 'criteria') {
      this.setState({view: <Criteria />, activeItem: 'criteria'})
    } else if (button === 'apartments') {
      this.setState({view: <WhyApartments />, activeItem: 'apartments'})
    } else if (button === 'south_bay') {
      this.setState({view: <WhySouthBay />, activeItem: 'south_bay'})
    } else {
      this.setState({view: <Investing />, activeItem: 'investing_with_us'})
    } 
  }

  render() {

    const { activeItem } = this.state

    return (
      <Segment className='full'>
        <Menu pointing vertical style={{marginLeft: '15em', fontSize: '1em'}}>
          <Menu.Item active={activeItem === 'investing_with_us'} className='investing_link' id='investing_with_us' onClick={this.handleClick}>INVESTING WITH US</Menu.Item>
          <Menu.Item active={activeItem === 'our_mission'} className='investing_link' id='our_mission' onClick={this.handleClick}>OUR MISSION</Menu.Item>
          <Menu.Item active={activeItem === 'criteria'} className='investing_link' id='criteria' onClick={this.handleClick}>INVESTMENT CRITERIA</Menu.Item>
          <Menu.Item active={activeItem === 'apartments'} className='investing_link' id='apartments' onClick={this.handleClick}>WHY APARTMENTS?</Menu.Item>
          <Menu.Item active={activeItem === 'south_bay'} className='investing_link' id='south_bay' onClick={this.handleClick}>WHY THE SOUTH BAY?</Menu.Item>
        </Menu>
        <Container>
          {this.state.view}
        </Container>
      </Segment>
    )
  }
}

export default InvestingContainer

