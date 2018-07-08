import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeUser, storePoses } from './store/actions/actions';
import api from './API';
import LoadDisplay from './Components/UI/Loader';

class PoseLoader extends Component {
	componentDidMount = async () => {
	  const { UserLogin, storePoses } = this.props;
	  UserLogin(api.user.get(true));
	  storePoses(api.poses.get(true));
	  UserLogin(await api.user.get());
	  storePoses(await api.poses.get());
	};

	render = () => {
	  const { poses, children } = this.props;
	  if (!poses || !poses.length) {
	    return <LoadDisplay />;
	  }
	  return (
  <div>
    {children}
  </div>
	  );
	};
}

const mapStateToProps = ({ pose: { poses } }) => ({ poses });
const mapDispatchToProps = dispatch => ({
  UserLogin: user => dispatch(storeUser(user)),
  storePoses: pose => dispatch(storePoses(pose)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PoseLoader);
