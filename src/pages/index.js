import React from 'react'
import { Element } from 'react-scroll'
import 'semantic-ui-css/semantic.min.css'
import ResponsiveContainer from '../components/ResponsiveContainer'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment
} from 'semantic-ui-react'

const HomepageLayout = () => (
  <ResponsiveContainer>
    
    <Segment style={{ minHeight: '100vh', padding: '0em 0em' }} vertical>
      <Element name="investing" className="element">
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible.
              Let us delight your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be
              bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Element>
    </Segment>

    <Segment style={{ minHeight: '100vh', padding: '0em' }} vertical>
      <Element name="properties" className="element">
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/images/avatar/large/nan.jpg' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Element>
    </Segment>

    <Segment style={{ minHeight: '100vh', padding: '8em 0em' }} vertical>
      <Element name="criteria" className="element">
        <Container text>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Breaking The Grid, Grabs Your Attention
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Instead of focusing on content creation and hard work, we have learned how to master the
            art of doing nothing by providing massive amounts of whitespace and generic content that
            can seem massive, monolithic and worth your attention.
          </p>
          <Button as='a' size='large'>
            Read More
          </Button>

          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            Case Studies
          </Divider>

          <Header as='h3' style={{ fontSize: '2em' }}>
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
            it's really true. It took years of gene splicing and combinatory DNA research, but our
            bananas can really dance.
          </p>
          <Button as='a' size='large'>
            I'm Still Quite Interested
          </Button>
        </Container>
      </Element>
    </Segment>

    <Segment style={{ minHeight: '100vh', padding: '8em 0em' }} vertical>
      <Element name="faq" className="element">
        <h1>FAQ</h1>
      </Element>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <p>IMPORTANT MESSAGE: Barshaycapital.Com is a website owned and operated by Barshay Real Estate, Inc. By accessing the website and any pages thereof, you agree to be bound by the terms of use and privacy policy, as each may be amended from time to time. Barshay Capital is not a registered broker, dealer, investment advisor, investment manager or registered funding portal. The securities offerings on this site are available only to “Accredited Investors” – generally, natural persons must have a net worth of over $1 million (exclusive of residence) or income in excess of $200,000 individually or $300,000 jointly with a spouse. The securities are offered in reliance on an exemption from the registration requirements of the Securities Act of 1933, as amended, and are not required to comply with specific disclosure requirements that apply to registration under the Securities Act. Neither the Securities and Exchange Commission nor any state regulator has passed upon the merits of or given its approval to the securities, the terms of the offerings, or the accuracy or completeness of any offering materials. The securities are subject to legal restrictions on transfer and resale and investors should not assume they will be able to resell their securities. Investing in securities involves risk, and investors should be able to bear the loss of their entire investment. All investors should make their own determination of whether or not to make any investment, based on their own independent evaluation and analysis.</p>
        <p>The information on the website includes historic results of certain investments made by Barshay Capital and affiliated companies; however, past performance is no guarantee of future results. Historic returns may not reflect actual future performance, may not reflect potential deductions for fees which may reduce actual realized returns. Investors are advised that any investment with Barshay Capital may experience different results from those shown. Projected IRR and multiples are based upon the anticipated redemption or maturity date. All investments offered by Barshay Capital involve risk and may result in loss.</p>
        <p>Some of the statements contained on the Barshay Capital website are forward-looking statements. You should not rely upon forward-looking statements as predictions of future events. These statements involve known and unknown risks, uncertainties, and other factors that may cause an investment’s actual results, levels of activity, performance, or achievements to be materially and adversely different from those expressed or implied by these forward-looking statements. Forward-looking statements may be identified by terminology such as “may,” “will,” “should,” “expects,” “plans,” “anticipates,” “believes,” “targeted,” “projected,” “underwritten,” “estimates,” “predicts,” “potential,” or “continue” or the negative of these terms or other comparable terminology.</p>
        <p>Although Barshay Capital believes that the expectations reflected in the forward-looking statements are reasonable, guarantees of future results, levels of activity, performance or achievements cannot be made. Moreover, neither Barshay Capital nor any other person or entity assumes responsibility for the accuracy and completeness of forward-looking statements. Neither Barshay Capital nor any other person or entity is under any duty to update any of the forward-looking statements to conform them to actual results.</p>
        <p>The information on this website contains a preliminary summary of the purpose and principal business terms of the investments offered by Barshay Capital. This summary does not purport to be complete and is qualified in its entirety by reference to the more detailed discussion contained in the actual text of the definitive documentation regarding such investment. Further, the overviews presented on the Barshay Capital website do not constitute an offer to sell or a solicitation of an offer to make an investment herein. No such offer or solicitation will be made prior to the delivery of definitive documentation relating to such investment. The information on this website does not constitute an offer of, or the solicitation of an offer to buy or subscribe for, any securities to any person in any jurisdiction to whom or in which such offer or solicitation is unlawful.</p>
        <p>Before making an investment decision with respect to any offering, potential investors are advised to carefully read the related subscription and offering memorandum documents and to consult with their tax, legal and financial advisors. Barshay Capital does not give investment advice or recommendations regarding any offering posted on the website.</p>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout
