import { connect } from 'react-redux';

import Form from '../components/Form';
import { addVideo } from '../reducers/videos';


const mapDispatchToProps = (dispatch) => {
    return {
        addVid: (data) => dispatch(addVideo(data))
    }
};

export default connect(null, mapDispatchToProps)(Form);