import React from 'react'
import { Card, Container, Grid, Placeholder, Segment } from 'semantic-ui-react'

const Properties = () => (
  <Segment className='segment' style={{fontSize: '1.5em'}} vertical>
    <Container>
      <Grid columns={2} style={{maxHeight: '70vh'}}>
        <Grid.Column width={4} style={{overflow: 'auto'}}>
          <Card>
            <Placeholder>
             <Placeholder.Image square />
            </Placeholder>
            <Card.Content>
              <Card.Header>Example Property</Card.Header>
              <Card.Description>Property Description</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Placeholder>
             <Placeholder.Image square />
            </Placeholder>
            <Card.Content>
              <Card.Header>Example Property</Card.Header>
              <Card.Description>Property Description</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Placeholder>
             <Placeholder.Image square />
            </Placeholder>
            <Card.Content>
              <Card.Header>Example Property</Card.Header>
              <Card.Description>Property Description</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={12} style={{paddingLeft: '5em'}}>
          <h1>Investment Criteria</h1>
          <p>Our primary focus is Capital Preservation, reducing risk to the investor and never over-leveraging. We conservatively underwrite each deal that comes to us, never underwriting to “appreciation”. In order to meet out investment standards, a property must have some significant and obvious opportunistic/value-add component and produce cash-flow from day one. We concentrate on non-rent control markets, with location being the key criteria. This means that we invest in our local markets, where there exist significant barriers to entry. We are very familiar with the local real estate market because we ourselves are currently invested in it. Having an intimate understanding of this rental market allows us to stay aware of all trends and current happenings.</p>
          <p>Investor yields can quickly be increased when our properties are refinanced quickly and equity is returned to the investor. Our goal is to return a portion of the invested equity within a 2-3 year period.</p>
          <p>Our goal is to rapidly adjust to the marketplace to maximize the potential revenue; willing to adapt to changing market conditions and move into or out of the market when economic conditions shift.</p>
          <p>The apartment asset class tends to perform well during economic downturns while producing stable income.</p>
        </Grid.Column>
      </Grid>
    </Container>
  </Segment>
)

export default Properties