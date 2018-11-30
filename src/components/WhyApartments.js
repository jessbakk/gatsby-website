import React from 'react'
import { Container, Grid, Icon } from 'semantic-ui-react'
import ScrollAnimation from 'react-animate-on-scroll'

const WhyApartments = () => (
  <Container style={{fontSize: '1.3em', padding: '5em'}}>
    <Grid centered columns={3}>
      <Grid.Row columns={3}>
        <Grid.Column textAlign='center'>
          <ScrollAnimation animateIn='flipInY' offset={0}>
            <Icon name='building' size='massive' circular></Icon>
          </ScrollAnimation>
          <ScrollAnimation style={{marginTop: '2em'}} animateIn='slideInUp' offset={0}>
            <h4>Apartments are a hedge against inflation and not enough new properties are being built to handle the increasing population.</h4>
          </ScrollAnimation>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <ScrollAnimation animateIn='flipInY' delay={500} offset={0}>
            <Icon name='building' size='massive' circular />
          </ScrollAnimation>
          <ScrollAnimation style={{marginTop: '2em'}} animateIn='slideInUp' delay={500} offset={0}>
            <h4>Apartment buildings are the best asset class because unlike Office and Retail, they are not affected by technological evolution (The Amazon Effect).</h4>
          </ScrollAnimation>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={3}>
        <Grid.Column textAlign='center'>
          <ScrollAnimation animateIn='flipInY' delay={1000} offset={0}>
            <Icon name='building' size='massive' circular />
          </ScrollAnimation>
          <ScrollAnimation style={{marginTop: '2em'}} animateIn='slideInUp' delay={1000} offset={0}>
            <h4>The opportunity exists to reposition apartment buildings in the South Bay that were built prior to 1990 and have not been updated. This physical obsolescence means that there is a significant upside in rents and value-add opportunities.</h4>
          </ScrollAnimation>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <ScrollAnimation animateIn='flipInY' delay={1500} offset={0}>
            <Icon name='building' size='massive' circular />
          </ScrollAnimation>
          <ScrollAnimation style={{marginTop: '2em'}} animateIn='fadeIn' delay={1500} offset={0}>
            <h4>In virtually all areas of Los Angeles, down zoning, stricter parking requirements and increased development costs have discouraged apartment development, making these properties a commodity.</h4>
          </ScrollAnimation>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <ScrollAnimation animateIn='flipInY' delay={2000} offset={0}>
            <Icon name='building' size='massive' circular />
          </ScrollAnimation>
          <ScrollAnimation style={{marginTop: '2em'}} animateIn='slideInUp' delay={2000} offset={0}>
            <h4>The South Bay is one of the best places to live in Los Angeles. With its climate, culture, availability of jobs and education, along with the pace of life, there is a never-ending supply of potential tenants.</h4>
          </ScrollAnimation>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default WhyApartments