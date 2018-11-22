import React from 'react'
import { Element } from 'react-scroll'
import 'semantic-ui-css/semantic.min.css'
import ResponsiveContainer from '../components/ResponsiveContainer'
import OurMission from '../components/OurMission'
import WhyApartments from '../components/WhyApartments'
import WhySouthBay from '../components/WhySouthBay'
import Properties from '../components/Properties'
import FAQ from '../components/FAQ'
import Disclaimer from '../components/Disclaimer'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
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
    <Disclaimer />
  </ResponsiveContainer>
)

export default HomepageLayout
