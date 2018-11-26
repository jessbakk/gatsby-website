import React from 'react'
import { Container, Grid, Segment } from 'semantic-ui-react'
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
    }
  }

  handleClick = (e) => {
    let button = e.target.id
    if (button === 'our_mission') {
      this.setState({view: <Mission />})
    } else if (button === 'criteria') {
      this.setState({view: <Criteria />})
    } else if (button === 'apartments') {
      this.setState({view: <WhyApartments />})
    } else if (button === 'south_bay') {
      this.setState({view: <WhySouthBay />})
    } else {
      this.setState({view: <Investing />})
    } 
  }

  render() {
    return (
      <Segment className="segment" style={{fontSize: '1.5em'}} vertical>
        <Container>
          <Grid columns='equal'>
            <Grid.Column width={12}>
              {this.state.view}
            </Grid.Column>
            <Grid.Column>
              <p id='our_mission' onClick={this.handleClick}>OUR MISSION</p>
              <p id='criteria' onClick={this.handleClick}>INVESTMENT CRITERIA</p>
              <p id='apartments' onClick={this.handleClick}>WHY APARTMENTS?</p>
              <p id='south_bay' onClick={this.handleClick}>WHY THE SOUTH BAY?</p>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    )
  }
}

export default InvestingContainer

