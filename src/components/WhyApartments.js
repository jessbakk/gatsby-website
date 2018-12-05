import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

const WhyApartments = () => (
  <Container style={{fontSize: '1.3em', padding: '5em'}}>
    <Grid columns={2}>
      <Grid.Row style={{height: '25vh'}}>
        <Grid.Column>
          <p>Apartments are a hedge against inflation and not enough new properties are being built to handle the increasing population.</p>
        </Grid.Column>
        <Grid.Column>
          <p>Apartment buildings are the best asset class because unlike Office and Retail, they are not affected by technological evolution (The Amazon Effect).</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{height: '25vh'}}>
        <Grid.Column>
          <p>The opportunity exists to reposition apartment buildings in the South Bay that were built prior to 1990 and have not been updated. This physical obsolescence means that there is a significant upside in rents and value-add opportunities.</p>     
        </Grid.Column>
        <Grid.Column>
          <p>In virtually all areas of Los Angeles, down zoning, stricter parking requirements and increased development costs have discouraged apartment development, making these properties a commodity.</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default WhyApartments