import React from 'react'
import { Button, Form, Grid, Icon, Menu, Modal, TextArea } from 'semantic-ui-react'

const ContactForm = () => (
  <Modal size="large" trigger={
    <Menu.Item id='contact-nav' position='right'>
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
              <p><Icon name='phone'></Icon>+1 (310) 937-1501<br /><Icon name='mail'></Icon>Adam@Barshayrealestate.com</p>
            </Grid.Column>
            <Grid.Column>
              <Form action="https://formspree.io/ianbuchholz@gmail.com" method="POST">
                <Form.Group widths='equal'>
                  <Form.Input fluid type="text" name="First Name" placeholder='First Name' />
                  <Form.Input fluid type="text" name="Last Name" placeholder='Last Name' />
                </Form.Group>
                <Form.Input fluid type="email" name="Email" placeholder='Email' />
                <TextArea autoHeight type="text" name="Message" label='Message' placeholder='Message'/>
                <Button style={{marginTop: '1em'}} type='submit'>Submit</Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Modal.Content>
  </Modal>
)

export default ContactForm