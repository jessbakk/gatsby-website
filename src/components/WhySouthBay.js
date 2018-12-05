import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

const WhySouthBay = () => (
  <Container style={{fontSize: '1.3em', padding: '5em'}}>
    <Grid columns={2}>
      <Grid.Row style={{height: '25vh'}}>
        <Grid.Column>
          <p>With the local job market and economy and the rise of tech companies relocating to the South Bay, many more young professionals are living and working in the South Bay.</p>
        </Grid.Column>
        <Grid.Column>
          <p>Renting is cheaper than buying, creating an immense demand for rentals.  Los Angeles rents have outpaced inflation over the last decade and the last generation.</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{height: '25vh'}}>
        <Grid.Column>
          <p>Since the Great Recession, millennials are opting to rent in lieu of buying. These individuals favor the flexibility of renting over purchasing a property.</p>
        </Grid.Column>
        <Grid.Column>
          <p>Los Angeles has lower vacancy rates and steadier appreciation than most other major US cities.</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default WhySouthBay