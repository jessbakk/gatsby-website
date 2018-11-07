import React from 'react'
import { Container, Grid, Icon } from 'semantic-ui-react'

const Investing = () => (
  <Container>
    <h1 style={{textAlign: 'center', marginTop: '3em', marginBottom: '2em'}}>WHY APARTMENTS?</h1>
    <Grid centered columns={3}>
      <Grid.Row centered columns={3}>
        <Grid.Column textAlign='center'>
            <Icon name='building' size='massive' circular></Icon>
            <h4>Apartments are a hedge against inflation and not enough new properties are being built to handle the increasing population.</h4>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Icon name='building' size='massive' circular />
          <h4>Apartment buildings are the best asset class because unlike Office and Retail, they are not affected by technological evolution (The Amazon Effect).</h4>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered columns={3}>
        <Grid.Column textAlign='center'>
          <Icon name='building' size='massive' circular />
          <h4>The opportunity exists to reposition apartment buildings in the South Bay that were built prior to 1990 and have not been updated. This physical obsolescence means that there is a significant upside in rents and value-add opportunities.</h4>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Icon name='building' size='massive' circular />
          <h4>In virtually all areas of Los Angeles, down zoning, stricter parking requirements and increased development costs have discouraged apartment development, making these properties a commodity.</h4>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Icon name='building' size='massive' circular />
          <h4>The South Bay is one of the best places to live in Los Angeles. With its climate, culture, availability of jobs and education, along with the pace of life, there is a never-ending supply of potential tenants.</h4>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Container>
)

export default Investing