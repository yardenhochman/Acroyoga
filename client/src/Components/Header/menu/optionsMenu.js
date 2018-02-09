import React, { Fragment,Component } from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import ProfileMenu from './ProfileMenu';
import { Redirect } from 'react-router';


class Options extends Component {
  state = { view: 'poses',viewChange:false }
  aboutPage = () => {
    this.setState({ view: 'about',viewChange:true })
  }
  render = () => {
    if (this.state.viewChange) {
      this.setState({viewChange:false})
      return <Redirect to="/about" />;
    }
    return <Fragment>
        <Dropdown item icon={<Icon name="bars" color={this.props.isUser ? 'green' : 'black'} size="big" />}>
          <Dropdown.Menu>
            <Menu.Item onClick={this.aboutPage}>
              <Icon name="info circle" size="big" />
              About Us
            </Menu.Item>
            <ProfileMenu />
          </Dropdown.Menu>
        </Dropdown>
      </Fragment>;
  }
};


export default Options;
