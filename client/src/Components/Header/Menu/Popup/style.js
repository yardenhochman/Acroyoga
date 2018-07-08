import { Button, Modal, Icon, Menu } from 'semantic-ui-react';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
height: 350px;
padding: 20px;
`;

export const MenuItem = styled(Menu.Item)``;

export const LoginButton = styled.button`
  padding: 0;
  height: 4vh;
  width: 10vh;
  margin: auto 2vw;
  background-color: #FF7257;
  color: white;
  font-family: Lato;
  display: flex;
  justify-content: center;
  border: none;
`;
export const LoginIcon = styled(Icon).attrs({
  size: "large",
  name: "user circle outline"
})`
  color: #FF7257;
  opacity: 1;
  font-size: 2em;
`;