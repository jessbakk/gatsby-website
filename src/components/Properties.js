import React from 'react'
import { Card, Container, Grid, Placeholder, Segment } from 'semantic-ui-react'

const Properties = () => (
  <Segment className='segment' style={{fontSize: '1.5em'}} vertical>
    <Container>
      <Grid centered stackable style={{maxHeight: '70vh', overflow: 'auto'}}>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Card>
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
              <Card.Content>
                <Card.Header>Example Property</Card.Header>
                <Card.Description>Property Description</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
              <Card.Content>
                <Card.Header>Example Property</Card.Header>
                <Card.Description>Property Description</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
              <Card.Content>
                <Card.Header>Example Property</Card.Header>
                <Card.Description>Property Description</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Card>
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
              <Card.Content>
                <Card.Header>Example Property</Card.Header>
                <Card.Description>Property Description</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
              <Card.Content>
                <Card.Header>Example Property</Card.Header>
                <Card.Description>Property Description</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
              <Card.Content>
                <Card.Header>Example Property</Card.Header>
                <Card.Description>Property Description</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Properties