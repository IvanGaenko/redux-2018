import { connect } from 'react-redux';

import List from '../components/List';

const mapStateToProps = state => {
    const items = state.videos.filter((video) => {
        const criteriaKeys = Object.keys(state.search);

        return criteriaKeys.every((criteriaKey) => {
            const criteriaValue = state.search[criteriaKey];

            if (criteriaValue.length < 2) {
                return true;
            }

            return video[criteriaKey].includes(criteriaValue);
        })
    });

    return {
        items,
    };
};

export default connect(mapStateToProps)(List);
