import React from 'react'
import { Container, Grid, Icon, Segment } from 'semantic-ui-react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from 'react-scroll'

const OurMission = () => (
  <Segment className="segment" style={{fontSize: '1.5em'}} vertical>
    <Container>
      <Grid columns={2}>
        <Grid.Column>
          <ScrollAnimation animateIn='fadeInLeft'>
            <h1 style={{textAlign: 'center'}}>OUR MISSION</h1>
            <p>Barshay Capital’s mission is to identify, acquire and manage income producing properties that provide opportunities for investors to preserve capital investments. Our goal is to provide consistent cash distributions, while waiting for future capital appreciation of our assets.</p>
            <p>We invest in well-located, value-add multifamily properties. We buy underperforming real estate with the opportunity to add significant value by improving overall management, resolving deferred-maintenance issues and removing the properties obsolescence from the rental market. This is achieved by adding features and upgrades that will attract and meet the needs of today’s renters seeking a quality rental living environment.</p>
            <p>Barshay Capital continues to be bullish on seeking apartment assets in strategic locations that offer a favorable upside. We believe our long time experience in the industry and a thorough understanding of how to add value will serve our investors well by protecting their capital and building wealth.</p>
          </ScrollAnimation>
        </Grid.Column>
        <Grid.Column>
          <ScrollAnimation animateIn='fadeInUp'>
            <h1 style={{textAlign: 'center'}}>INVESTING WITH US</h1>
            <p>Diversify your portfolio in real estate even though you don’t have the time, expertise, knowledge or capital to do it all on your own.  Expand your Net Worth with Multi-Family Properties while increasing Passive income.</p>
            <p>We are a team of real estate investors with over 50 years of combined experience in acquiring, renovating, and upgrading multi-family properties in the Los Angeles area.</p>
            <p>If you love real estate, passive income and want to protect your capital and grow it over time, invest in apartments with Barshay Capital. You get paid and reap the rewards from our experience.</p>
          </ScrollAnimation>
          <ScrollAnimation style={{textAlign: 'center'}} animateIn='fadeIn' delay={1000} offset={0}>
            <h1 style={{marginTop: '1em'}}>WHY APARTMENTS?</h1>
          </ScrollAnimation>
          <ScrollAnimation style={{textAlign: 'center'}} animateIn='fadeInDown' delay={1500} offset={0}>
            <Link style={{background: 'rgba(255,255,255,0)'}} to="why-apartments" spy={true} smooth={true} duration={500}>
              <Icon id='down-arrow-our-mission' size='big' name='angle double down' />
            </Link>
          </ScrollAnimation>
        </Grid.Column>
      </Grid>
    </Container>
  </Segment>
)

export default OurMission