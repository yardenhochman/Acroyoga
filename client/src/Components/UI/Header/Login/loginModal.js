import React from 'react';
import { Menu, Button, Header, Image, Modal, Form, Checkbox } from 'semantic-ui-react';
const Login = () => {
  return (
    <Form className="loginForm">
      <Form.Field>
        <label>First Name</label>
        <input placeholder="First Name" />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder="Last Name" />
      </Form.Field>
      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

const PopupLogin = ({ userName }) => {
  let logged;
  if (userName !== 'guest') logged = true;
  else logged = false;
  return (
    <Modal className="PopupLogin" trigger={<Menu.Item>{logged ? `logout ${userName}` : `Login`}</Menu.Item>}>
      <Login />
    </Modal>
  );
};

export default PopupLogin;
