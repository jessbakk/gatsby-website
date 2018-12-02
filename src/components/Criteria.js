import React from 'react'
import { Container } from 'semantic-ui-react'
import ScrollAnimation from 'react-animate-on-scroll'

const Criteria = () => (
  <Container style={{fontSize: '1.3em', padding: '5em'}}>
    <ScrollAnimation animateIn='fadeIn' delay={100} offset={0}>
      <h1 style={{textAlign: 'center'}}>INVESTMENT CRITERIA</h1>
    </ScrollAnimation>
    <br></br>
    <ScrollAnimation animateIn='fadeIn' delay={300} offset={0}>
      <p>Our primary focus is Capital Preservation, reducing risk to the investor and never over-leveraging. We conservatively underwrite each deal that comes to us, never underwriting to “appreciation”. In order to meet out investment standards, a property must have some significant and obvious opportunistic/value-add component and produce cash-flow from day one. We concentrate on non-rent control markets, with location being the key criteria. This means that we invest in our local markets, where there exist significant barriers to entry. We are very familiar with the local real estate market because we ourselves are currently invested in it. Having an intimate understanding of this rental market allows us to stay aware of all trends and current happenings.</p>
    </ScrollAnimation>
    <br></br>
    <ScrollAnimation animateIn='fadeIn' delay={500} offset={0}>
      <p>Investor yields can quickly be increased when our properties are refinanced quickly and equity is returned to the investor. Our goal is to return a portion of the invested equity within a 2-3 year period.</p>
    </ScrollAnimation>
    <br></br>
    <ScrollAnimation animateIn='fadeIn' delay={700} offset={0}>
      <p>Our goal is to rapidly adjust to the marketplace to maximize the potential revenue; willing to adapt to changing market conditions and move into or out of the market when economic conditions shift.</p>
    </ScrollAnimation>
    <br></br>
    <ScrollAnimation animateIn='fadeIn' delay={900} offset={0}>
      <p>The apartment asset class tends to perform well during economic downturns while producing stable income.</p>
    </ScrollAnimation>
    <br></br>
    <ScrollAnimation animateIn='fadeIn' delay={1100} offset={0}>
      <p>Upon hitting or exceeding our Value Add Target we typically exit the market or 1031 exchange into another underperforming asset with good upside potential.</p>
    </ScrollAnimation>
    <br></br>
    <ScrollAnimation animateIn='fadeIn' delay={1300} offset={0}>
      <p>Our group has an impeccable reputation for closing deals and greatly leverage our reputation to insure the best terms and the lowest price.</p>
    </ScrollAnimation>
  </Container>
)

export default Criteria