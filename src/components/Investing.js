import React from 'react'
import { Container, Grid, Icon } from 'semantic-ui-react'

const Investing = () => (
  <Container style={{padding: '5em', textAlign: 'center'}}>
    <h1 style={{marginBottom: '2em'}}>INVESTING WITH US</h1>
    <Grid columns={3} style={{fontSize: '1.3em'}} divided>
      <Grid.Row>
        <Grid.Column style={{textAlign: 'center'}}>
          <Icon name='chart pie' size='massive' ></Icon>
          <p style={{textAlign: 'left', marginTop: '2em'}}>Diversify your portfolio in real estate even though you don’t have the time, expertise, knowledge or capital to do it all on your own.  Expand your Net Worth with Multi-Family Properties while increasing Passive income.</p>
        </Grid.Column>
        <Grid.Column style={{textAlign: 'center'}}>
          <Icon name='certificate' size='massive'></Icon>
          <p style={{textAlign: 'left', marginTop: '2em'}}>We are a team of real estate investors with over 50 years of combined experience in acquiring, renovating, and upgrading multi-family properties in the Los Angeles area.</p>
        </Grid.Column>
        <Grid.Column style={{textAlign: 'center'}}>
          <Icon name='chart line' size='massive'></Icon>
          <p style={{textAlign: 'left', marginTop: '2em'}}>If you love real estate, passive income and want to protect your capital and grow it over time, invest in apartments with Barshay Capital. You get paid and reap the rewards from our experience.</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default Investing