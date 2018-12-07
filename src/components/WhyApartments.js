import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

const WhyApartments = () => (
  <Container style={{fontSize: '1.3em', padding: '5em'}}>
    <Grid columns={2} style={{border: '5px solid white'}}>
      <Grid.Row style={{height: '35vh', borderBottom: '5px solid white', padding: '0'}}>
        <Grid.Column className='animated fadeInDown' style={{color: 'white', borderRight: '5px solid white', padding: '0', backgroundColor: 'rgba(0,0,255,.5)', animationDuration: '.5s'}}>
          <p style={{position: 'absolute', top: '50%', transform: 'translate(0%, -50%)', textAlign: 'left', padding: '1em'}}>Apartments are a hedge against inflation and not enough new properties are being built to handle the increasing population.</p>
        </Grid.Column>
        <Grid.Column className='animated fadeInRight' style={{color: 'white', borderLeft: '5px solid white', padding: '0', backgroundColor: 'rgba(0,0,255,.5)', animationDuration: '.5s'}}>
          <p style={{position: 'absolute', top: '50%', transform: 'translate(0%, -50%)', textAlign: 'left', padding: '1em'}}>Apartment buildings are the best asset class because unlike Office and Retail, they are not affected by technological evolution (The Amazon Effect).</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{height: '35vh', borderTop: '5px solid white', padding: '0'}}>
        <Grid.Column className='animated fadeInLeft' style={{color: 'white', borderRight: '5px solid white', padding: '0', backgroundColor: 'rgba(0,0,255,.5)', animationDuration: '.5s'}}>
          <p style={{position: 'absolute', top: '50%', transform: 'translate(0%, -50%)', textAlign: 'left', padding: '1em'}}>The opportunity exists to reposition apartment buildings in the South Bay that were built prior to 1990 and have not been updated. This physical obsolescence means that there is a significant upside in rents and value-add opportunities.</p>     
        </Grid.Column>
        <Grid.Column className='animated fadeInUp' style={{color: 'white', borderLeft: '5px solid white', padding: '0', backgroundColor: 'rgba(0,0,255,.5)', animationDuration: '.5s'}}>
          <p style={{position: 'absolute', top: '50%', transform: 'translate(0%, -50%)', textAlign: 'left', padding: '1em'}}>In virtually all areas of Los Angeles, down zoning, stricter parking requirements and increased development costs have discouraged apartment development, making these properties a commodity.</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default WhyApartments