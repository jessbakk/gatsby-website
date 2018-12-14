import React from 'react'
import { Icon, Menu, Segment } from 'semantic-ui-react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from 'react-scroll'
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
      <Segment className='full' style={{padding: '0'}}>
        <Menu tabular vertical style={{margin: '5em', fontSize: '1em'}}>
          <Menu.Item active={activeItem === 'investing_with_us'} className='investing_link' id='investing_with_us' onClick={this.handleClick}>INVESTING WITH US</Menu.Item>
          <Menu.Item active={activeItem === 'our_mission'} className='investing_link' id='our_mission' onClick={this.handleClick}>OUR MISSION</Menu.Item>
          <Menu.Item active={activeItem === 'apartments'} className='investing_link' id='apartments' onClick={this.handleClick}>WHY APARTMENTS?</Menu.Item>
          <Menu.Item active={activeItem === 'south_bay'} className='investing_link' id='south_bay' onClick={this.handleClick}>WHY THE SOUTH BAY?</Menu.Item>
          <Menu.Item active={activeItem === 'criteria'} className='investing_link' id='criteria' onClick={this.handleClick}>INVESTMENT CRITERIA</Menu.Item>
        </Menu>
          {this.state.view}
        <ScrollAnimation style={{textAlign: 'center', position: 'absolute', width: '100%', bottom: '0', marginBottom: '2em'}} animateIn='fadeInDown' delay={500} offset={0}>
          <Link style={{background: 'rgba(255,255,255,0)'}} to='properties' spy={true} smooth={true} duration={500}>
            <Icon id='down-arrow-investing' size='huge' name='angle down' />
          </Link>
        </ScrollAnimation>
      </Segment>
    )
  }
}

export default InvestingContainer

