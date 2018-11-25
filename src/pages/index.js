import React from 'react'
import { Element } from 'react-scroll'
import 'semantic-ui-css/semantic.min.css'
import ResponsiveContainer from '../components/ResponsiveContainer'
import OurMission from '../components/OurMission'
import PropertiesScroller from '../components/PropertiesScroller'
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
    </Element>
    <Element name="properties" className="element">
      <PropertiesScroller />
    </Element>
    <Element name="faq" className="element">
      <FAQ />
    </Element>
    <Disclaimer />
  </ResponsiveContainer>
)

export default HomepageLayout
