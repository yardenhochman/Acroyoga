import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';
import Media from 'react-media';

class DetermineView extends Component {
  setView = () => {
    this.props.setDevice('Desktop');
    return <div />;
  };
  render = () => {
    return (
      <Fragment>
        <Media query={{ minWidth: 1000 }}>{yes => yes && this.setView('Desktop')}</Media>;
        <Media query={{ minWidth: 451, maxWidth: 999 }}>{yes => yes && this.setView('Landscape')}</Media>;
        <Media query={{ maxWidth: 450 }}>{yes => yes && this.setView('Portrait')}</Media>
      </Fragment>
    );
  };
}
const mapStateToProps = state => {
  const { view } = state;
  return { view };
};
const mapDispatchToProps = dispatch => {
  const { SET_VIEW } = actionTypes;
  return {
    setDevice: device =>
      dispatch({
        type: SET_VIEW,
        device,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetermineView);
