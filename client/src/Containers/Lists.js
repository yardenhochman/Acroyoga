import React, { Component } from 'react';
import { connect, createProvider } from 'react-redux';
import axios from 'axios';

import Input from '../Components/UI/Input/Input';
import Button from '../Components/UI/Button/Button';
import * as actions from '../store/auth';
import * as actionTypes from '../store/actions';

const Lists = ({ lists }) => {
  return <div>hello</div>;
};

const mapStateToProps = state => {
  const { view: { loaded, mode, filterValue, filter }, user: { name: userName, lists } } = state;
  return { loaded, mode, userName, lists, filter, filterValue };
};
const mapDispatchToProps = dispatch => {
  return {
    storePose: pose =>
      dispatch({
        type: actionTypes.STORE_POSE,
        pose,
      }),
    setMode: mode =>
      dispatch({
        type: actionTypes.SETMODE,
        mode,
      }),
    setLoaded: () =>
      dispatch({
        type: actionTypes.LOADED,
      }),
    setFilter: (setFilter, value) =>
      dispatch({
        type: actionTypes.FILTER,
        setFilter,
        value,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);

/* 
receives userInfo.lists
Shows a listName selection for each list the user created
displays a form to create new items - copy a todo

*/
