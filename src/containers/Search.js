import { connect } from 'react-redux';

import Search from '../components/Search';
import { updateSearch } from '../reducers/search';

const mapDispathToProps = (dispatch) => ({
  search: (searchField, value) => dispatch(updateSearch(searchField, value)),
});

export default connect(null, mapDispathToProps)(Search);