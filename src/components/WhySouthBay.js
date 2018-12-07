import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

const WhySouthBay = () => (
  <Container style={{fontSize: '1.3em', padding: '5em'}}>
    <Grid columns={2} style={{border: '5px solid white'}}>
      <Grid.Row style={{height: '35vh', borderBottom: '5px solid white', padding: '0'}}>
        <Grid.Column className='animated fadeInDown' style={{color: 'white', borderRight: '5px solid white', padding: '0', backgroundColor: 'rgba(255,0,0,.5)', animationDuration: '.5s'}}>
          <p style={{position: 'absolute', top: '50%', transform: 'translate(0%, -50%)', textAlign: 'left', padding: '1em'}}>With the local job market and economy and the rise of tech companies relocating to the South Bay, many more young professionals are living and working in the South Bay.</p>
        </Grid.Column>
        <Grid.Column className='animated fadeInDown' style={{color: 'white', borderLeft: '5px solid white', padding: '0', backgroundColor: 'rgba(255,0,0,.5)', animationDuration: '.5s', animationDelay: '.2s'}}>
          <p style={{position: 'absolute', top: '50%', transform: 'translate(0%, -50%)', textAlign: 'left', padding: '1em'}}>Renting is cheaper than buying, creating an immense demand for rentals.  Los Angeles rents have outpaced inflation over the last decade and the last generation.</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{height: '35vh', borderTop: '5px solid white', padding: '0'}}>
        <Grid.Column className='animated fadeInUp' style={{color: 'white', borderRight: '5px solid white', padding: '0', backgroundColor: 'rgba(255,0,0,.5)', animationDuration: '.5s', animationDelay: '.4s'}}>
          <p style={{position: 'absolute', top: '50%', transform: 'translate(0%, -50%)', textAlign: 'left', padding: '1em'}}>Since the Great Recession, millennials are opting to rent in lieu of buying. These individuals favor the flexibility of renting over purchasing a property.</p>
        </Grid.Column>
        <Grid.Column className='animated fadeInUp' style={{color: 'white', borderLeft: '5px solid white', padding: '0', backgroundColor: 'rgba(255,0,0,.5)', animationDuration: '.5s', animationDelay: '.6s'}}>
          <p style={{position: 'absolute', top: '50%', transform: 'translate(0%, -50%)', textAlign: 'left', padding: '1em'}}>Los Angeles has lower vacancy rates and steadier appreciation than most other major US cities.</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default WhySouthBay