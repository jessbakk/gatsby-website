import React from 'react'
import { Button, Form, Grid, Menu, Modal } from 'semantic-ui-react'

const ContactForm = () => (
  <Modal size="small" trigger={
    <Menu.Item position='right'>
      <Button primary style={{ marginLeft: '0.5em' }}>
        Contact
      </Button>
    </Menu.Item>
    } closeIcon>
      <Modal.Content>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <h2>Contact Us</h2>
              <p>1145 Artesia Blvd, Suite 204<br/>Manhattan Beach, CA 90266</p>
              <p>+1 (310) 937-1501<br />Adam@Barshayrealestate.com</p>
            </Grid.Column>
            <Grid.Column>
              <Form action="https://formspree.io/ianbuchholz@gmail.com" method="POST">
                <Form.Group widths='equal'>
                  <Form.Input fluid type="text" name="First Name" label='First Name' placeholder='First Name' />
                  <Form.Input fluid type="text" name="Last Name" label='Last Name' placeholder='Last Name' />
                </Form.Group>
                <Form.Input fluid type="email" name="Email" label='Email' placeholder='Email' />
                <Form.Input fluid type="text" name="Message" label='Message' />
                <Button type='submit'>Submit</Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Modal.Content>
  </Modal>
)

export default ContactForm