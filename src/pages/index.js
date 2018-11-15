import React from 'react'
import { Element } from 'react-scroll'
import 'semantic-ui-css/semantic.min.css'
import ResponsiveContainer from '../components/ResponsiveContainer'
import OurMission from '../components/OurMission'
import WhyApartments from '../components/WhyApartments'
import WhySouthBay from '../components/WhySouthBay'
import Properties from '../components/Properties'
import FAQ from '../components/FAQ'
import {
  Container,
  Segment
} from 'semantic-ui-react'
import "animate.css/animate.min.css"
import './index.css'

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Element name="investing" className="element">
      <OurMission />
      <Element name="why-apartments" className="element">
        <WhyApartments />
      </Element>
      <WhySouthBay />
    </Element>
   
    <Element name="properties" className="element">
      <Properties />
    </Element>

    <Element name="faq" className="element">
        <FAQ />
    </Element>

    <Segment className="segment" id="disclaimer" inverted vertical>
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
