import React from 'react'
import { Card, Container, Modal, Placeholder, Segment } from 'semantic-ui-react'
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
                    <Modal trigger={
                      <Card>
                        <Placeholder>
                          <Placeholder.Image square />
                        </Placeholder>
                        <Card.Content>
                          <Card.Header>{p.name}</Card.Header>
                          <Card.Description>{p.card_desc}</Card.Description>
                        </Card.Content>
                      </Card>} closeIcon>
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
    full_desc: 'Investment Description',
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
    full_desc: 'Investment Description',
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
    full_desc: 'Investment Description',
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
    full_desc: 'Investment Description',
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
    full_desc: 'Investment Description',
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
    full_desc: 'Investment Description',
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
    full_desc: 'Investment Description',
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