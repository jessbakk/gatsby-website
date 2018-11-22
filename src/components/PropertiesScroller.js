import React from 'react'
import { Card, Container, Header, Modal, Placeholder, Segment } from 'semantic-ui-react'
import Slider from "react-slick";
import ScrollAnimation from 'react-animate-on-scroll'

class PropertiesScroller extends React.Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: 'true',
      swipeToSlide: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      adaptiveHeight: true
    }
    return (
    <ScrollAnimation animateIn='fadeIn'>
      <Segment>
        <Container>
            <Slider {...settings}>
              {properties.map(p => {
                return (
                  <div>
                    <Modal size='large' trigger={
                      <Card>
                        <Placeholder>
                          <Placeholder.Image square />
                        </Placeholder>
                        <Card.Content>
                          <Card.Header>{p.name}</Card.Header>
                          <Card.Description>{p.card_desc}</Card.Description>
                        </Card.Content>
                      </Card>} closeIcon>
                      <Modal.Content>
                        <Placeholder>
                          <Placeholder.Image square />
                        </Placeholder>
                        <Modal.Description>
                          <Header>
                            {p.name}
                          </Header>
                          <p>{p.property_desc}</p>
                          <p>{p.investment_desc}</p>
                          <ul>
                            <li>Purchase Price: {p.purchase_price}</li>
                            <li>Units: {p.units}</li>
                            <li>Price Per Unit: {p.unit_price}</li>
                            <li>RSF: {p.rsf}</li>
                            <li>Year Built: {p.year_built}</li>
                            <li>Current Cap Rate: {p.current_cap_rate}</li>
                            <li>Market Cap Rate: {p.market_cap_rate}</li>
                            <li>Current GRM: {p.current_grm}</li>
                            <li>Market GRM: {p.market_grm}</li>
                          </ul>
                        </Modal.Description>
                      </Modal.Content>
                    </Modal>
                  </div>
                )
              })}
            </Slider>
          </Container>
        </Segment>
      </ScrollAnimation>  
    )
  }
}

export default PropertiesScroller

const properties = [
  {
    name: 'Hawthorne Apartments',
    card_desc: 'Property Description',
    property_desc: 'This project is a 44-unit apartment building located in Hawthorne. The scope of this project will be to purchase the property for $10,000,000. We then estimate $10,000/unit in rehabilitation costs or approximately $500,000. The unit mix is highly desirable, with eighteen 2 bedroom and 2 baths at an average $1,514 per month, twenty-four 1 bedroom and 1 baths at an average $1,308 per month, and two studio units at an average $1,098 per month.',
    investment_desc: 'We believe that the rehab will be completed in the first year, allowing us to refinance within that year to pull cash out. We will then hold the property until year 6, when we expect the new capitalized value to be $11,883,775.  Apartment buildings over 30 units very rarely come up for sale in this market, this is a rare opportunity to own and improve a quality high-volume occupancy property in Hawthorne.',
    purchase_price: '$10,000,000',
    units: '44',
    unit_price: '$227,272',
    rsf: '31,454',
    year_built: '1970',
    current_cap_rate: '4.78%',
    market_cap_rate: '5.89%',
    current_grm: '13.60',
    market_grm: '11.89'
  },
  {
    name: 'Example Property 2',
    card_desc: 'Property Description',
    property_desc: 'Property Description',
    investment_desc: 'Investment Description',
    purchase_price: '#',
    units: '#',
    unit_price: '#',
    rsf: '#',
    year_built: '#',
    current_cap_rate: '#',
    market_cap_rate: '#',
    current_grm: '#',
    market_grm: '#'
  },
  {
    name: 'Example Property 3',
    card_desc: 'Property Description',
    property_desc: 'Property Description',
    investment_desc: 'Investment Description',
    purchase_price: '#',
    units: '#',
    unit_price: '#',
    rsf: '#',
    year_built: '#',
    current_cap_rate: '#',
    market_cap_rate: '#',
    current_grm: '#',
    market_grm: '#'
  },
  {
    name: 'Example Property 4',
    card_desc: 'Property Description',
    property_desc: 'Property Description',
    investment_desc: 'Investment Description',
    purchase_price: '#',
    units: '#',
    unit_price: '#',
    rsf: '#',
    year_built: '#',
    current_cap_rate: '#',
    market_cap_rate: '#',
    current_grm: '#',
    market_grm: '#'
  },
  {
    name: 'Example Property 5',
    card_desc: 'Property Description',
    property_desc: 'Property Description',
    investment_desc: 'Investment Description',
    purchase_price: '#',
    units: '#',
    unit_price: '#',
    rsf: '#',
    year_built: '#',
    current_cap_rate: '#',
    market_cap_rate: '#',
    current_grm: '#',
    market_grm: '#'
  },
  {
    name: 'Example Property 6',
    card_desc: 'Property Description',
    property_desc: 'Property Description',
    investment_desc: 'Investment Description',
    purchase_price: '#',
    units: '#',
    unit_price: '#',
    rsf: '#',
    year_built: '#',
    current_cap_rate: '#',
    market_cap_rate: '#',
    current_grm: '#',
    market_grm: '#'
  },
  {
    name: 'Example Property 7',
    card_desc: 'Property Description',
    property_desc: 'Property Description',
    investment_desc: 'Investment Description',
    purchase_price: '#',
    units: '#',
    unit_price: '#',
    rsf: '#',
    year_built: '#',
    current_cap_rate: '#',
    market_cap_rate: '#',
    current_grm: '#',
    market_grm: '#'
  }
]