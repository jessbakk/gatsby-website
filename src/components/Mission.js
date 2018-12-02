import React from 'react'
import { Container } from 'semantic-ui-react'
import ScrollAnimation from 'react-animate-on-scroll'

const Mission = () => (
  <Container style={{fontSize: '1.3em', padding: '5em'}}>
    <ScrollAnimation animateIn='fadeIn' delay={100} offset={0}>
      <h1 style={{textAlign: 'center'}}>OUR MISSION</h1>
    </ScrollAnimation>
    <br></br>
    <ScrollAnimation animateIn='fadeIn' delay={300} offset={0}>
      <p>Barshay Capital’s mission is to identify, acquire and manage income producing properties that provide opportunities for investors to preserve capital investments. Our goal is to provide consistent cash distributions, while waiting for future capital appreciation of our assets.</p>
    </ScrollAnimation>
    <br></br>
    <ScrollAnimation animateIn='fadeIn' delay={500} offset={0}>
      <p>We invest in well-located, value-add multifamily properties. We buy underperforming real estate with the opportunity to add significant value by improving overall management, resolving deferred-maintenance issues and removing the properties obsolescence from the rental market. This is achieved by adding features and upgrades that will attract and meet the needs of today’s renters seeking a quality rental living environment.</p>
    </ScrollAnimation>
    <br></br>
    <ScrollAnimation animateIn='fadeIn' delay={700} offset={0}>
      <p>Barshay Capital continues to be bullish on seeking apartment assets in strategic locations that offer a favorable upside. We believe our long time experience in the industry and a thorough understanding of how to add value will serve our investors well by protecting their capital and building wealth.</p>
    </ScrollAnimation>
  </Container>        
)

export default Mission