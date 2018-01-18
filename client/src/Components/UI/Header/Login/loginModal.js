import React from 'react';
import { Menu, Button, Header, Image, Modal, Form, Checkbox } from 'semantic-ui-react';
import { Grid, Message, Segment } from 'semantic-ui-react';

const LoginForm = () => (
  <div className="login-form">
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size="large">
          <Segment stacked>
            <Form.Input fluid icon="user" iconPosition="left" placeholder="E-mail address" />
            <Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" type="password" />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
);

const PopupLogin = ({ userName }) => {
  let logged;
  if (userName !== 'guest') logged = true;
  else logged = false;
  return (
    <Modal  dimmer="blurring" className="PopupLogin" size="mini" trigger={<Menu.Item>{logged ? `logout ${userName}` : `Login`}</Menu.Item>}>
      <LoginForm />
    </Modal>
  );
};

export default PopupLogin;
