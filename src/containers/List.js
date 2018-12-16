import { connect } from 'react-redux';

import List from '../components/List';
import { filteredVideos } from '../selectors';
import { delVideo, editVideo } from "../reducers/videos";


const mapStateToProps = state => {
  return {
    items: filteredVideos(state),
    totalVideoAmount: state.videos.length
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delVideo: (id) => dispatch(delVideo(id)),
    editVideo: ( id, update ) => dispatch(editVideo(id, update))
  }
  };

export default connect(mapStateToProps, mapDispatchToProps)(List);
