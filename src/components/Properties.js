import React from 'react'
import { Card, Container, Placeholder, Segment } from 'semantic-ui-react'
import Slider from "react-slick";
import ScrollAnimation from 'react-animate-on-scroll'

class Properties extends React.Component {
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
    }
    return (
     
    <ScrollAnimation animateIn='fadeIn'>
      <Segment>
        <Container>
            <Slider {...settings}>
              <div>
                <Card>
                  <Placeholder>
                    <Placeholder.Image square />
                  </Placeholder>
                  <Card.Content>
                    <Card.Header>Example Property</Card.Header>
                    <Card.Description>Property Description</Card.Description>
                  </Card.Content>
                </Card>
              </div>
              <div>
                <Card>
                  <Placeholder>
                    <Placeholder.Image square />
                  </Placeholder>
                  <Card.Content>
                    <Card.Header>Example Property</Card.Header>
                    <Card.Description>Property Description</Card.Description>
                  </Card.Content>
                </Card>
              </div>
              <div>
                <Card>
                  <Placeholder>
                    <Placeholder.Image square />
                  </Placeholder>
                  <Card.Content>
                    <Card.Header>Example Property</Card.Header>
                    <Card.Description>Property Description</Card.Description>
                  </Card.Content>
                </Card>
              </div>
              <div>
                <Card>
                  <Placeholder>
                    <Placeholder.Image square />
                  </Placeholder>
                  <Card.Content>
                    <Card.Header>Example Property</Card.Header>
                    <Card.Description>Property Description</Card.Description>
                  </Card.Content>
                </Card>
              </div>
              <div>
                <Card>
                  <Placeholder>
                    <Placeholder.Image square />
                  </Placeholder>
                  <Card.Content>
                    <Card.Header>Example Property</Card.Header>
                    <Card.Description>Property Description</Card.Description>
                  </Card.Content>
                </Card>
              </div>
              <div>
                <Card>
                  <Placeholder>
                    <Placeholder.Image square />
                  </Placeholder>
                  <Card.Content>
                    <Card.Header>Example Property</Card.Header>
                    <Card.Description>Property Description</Card.Description>
                  </Card.Content>
                </Card>
              </div>
            </Slider>
          </Container>
        </Segment>
      </ScrollAnimation>
        
    )
  }
}

export default Properties