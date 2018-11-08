import React from 'react'
import { Container, Grid, Icon, Segment } from 'semantic-ui-react'
import ScrollAnimation from 'react-animate-on-scroll'

const WhySouthBay = () => (
  <Segment className="segment" vertical>
    <Container>
      <ScrollAnimation animateIn='fadeIn' offset={0}>
        <h1 style={{textAlign: 'center', marginTop: '3em', marginBottom: '2em'}}>WHY THE SOUTH BAY?</h1>
      </ScrollAnimation>
      <Grid centered columns={3}>
        <Grid.Row centered columns={3}>
          <Grid.Column textAlign='center'>
            <ScrollAnimation animateIn='flipInY' offset={0}>
              <Icon name='building' size='massive' circular></Icon>
            </ScrollAnimation>
            <ScrollAnimation style={{marginTop: '2em'}} animateIn='slideInUp' offset={0}>
              <h4>With the local job market and economy and the rise of tech companies relocating to the South Bay, many more young professionals are living and working in the South Bay.</h4>
            </ScrollAnimation>
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <ScrollAnimation animateIn='flipInY' delay={500} offset={0}>
              <Icon name='building' size='massive' circular />
            </ScrollAnimation>
            <ScrollAnimation style={{marginTop: '2em'}} animateIn='slideInUp' delay={500} offset={0}>
              <h4>Renting is cheaper than buying, creating an immense demand for rentals.  Los Angeles rents have outpaced inflation over the last decade and the last generation.</h4>
            </ScrollAnimation>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column textAlign='center'>
            <ScrollAnimation animateIn='flipInY' delay={1000} offset={0}>
              <Icon name='building' size='massive' circular />
            </ScrollAnimation>
            <ScrollAnimation style={{marginTop: '2em'}} animateIn='slideInUp' delay={1000} offset={0}>
              <h4>Since the Great Recession, millennials are opting to rent in lieu of buying. These individuals favor the flexibility of renting over purchasing a property.</h4>
            </ScrollAnimation>
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <ScrollAnimation animateIn='flipInY' delay={1500} offset={0}>
              <Icon name='building' size='massive' circular />
            </ScrollAnimation>
            <ScrollAnimation style={{marginTop: '2em'}} animateIn='fadeIn' delay={1500} offset={0}>
              <h4>Los Angeles has lower vacancy rates and steadier appreciation than most other major US cities.</h4>
            </ScrollAnimation>
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <ScrollAnimation animateIn='flipInY' delay={2000} offset={0}>
              <Icon name='building' size='massive' circular />
            </ScrollAnimation>
            <ScrollAnimation style={{marginTop: '2em'}} animateIn='slideInUp' delay={2000} offset={0}>
              <h4>People always need a place to live. Even in the event of a market down-turn, there is still income.</h4>
            </ScrollAnimation>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default WhySouthBay