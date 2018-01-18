import React from 'react';
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react';

const RegisterForm = ({ login }) => (
  <div className="register-form">
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.register-form {
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
              Register
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account? <Button onClick={login}>Login</Button>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
);
export default RegisterForm;
