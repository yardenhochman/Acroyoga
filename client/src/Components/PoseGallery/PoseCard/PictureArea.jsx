import React from 'react';
import { connect } from 'react-redux';
import {Phone_Landscape} from '../../../DeviceRules';
import api from '../../../API';
import PosePicture from './PoseParts/Picture';
import Media from 'react-media';
import Heart from './PoseParts/Heart';
import { remove_from_user, add_to_user } from '../../../store/actions/actions';
import {removeFromFavorites, addToFavorites} from '../helpers';

const PictureArea = ({img,userName,tag,poseID,lists,removeFromUserList,addToUserList,userID}) => (
  <div className="pose_display_and_actions_box">
    <PosePicture img={img}/>
    <Media query={`not ${Phone_Landscape}`}>
    {
      !userName && !tag? <div /> :(
        <Heart 
          key={poseID + 'heart'} 
          poseID={poseID} 
          isFavorite={lists && lists.Favorites && lists.Favorites.indexOf(poseID) !== -1}
          remove={()=>removeFromFavorites(poseID,userID,removeFromUserList)}
          add={()=>addToFavorites(poseID,userID,addToUserList)}
          userID={userID}
        />
      )
    }
    </Media>
  </div>
);

const mapStateToProps = ({ view: { tag }, user: { name, lists, id } }) => ({  userName: name, tag, lists, userID: id });

const mapDispatchToProps = dispatch => ({
    addToUserList: (pose_id, listName) => dispatch(add_to_user(pose_id, listName)),
    removeFromUserList: (pose_id, listName) => dispatch(remove_from_user(pose_id, listName))
});

export default connect(mapStateToProps,mapDispatchToProps)(PictureArea);
