import React, {PureComponent} from 'react';
import {string} from 'prop-types';

const getVideoId = (url) => url.split('/')[3];
const createVideoUrl = (id) => `https://www.youtube.com/embed/${id}`;

export default class ListItem extends PureComponent {
    static propTypes = {
        id: string.isRequired,
        title: string.isRequired,
        url: string.isRequired,
        tags: string.isRequired,
    };

    render() {
        const { url, title } = this.props;

        const videoId = getVideoId(url);
        const videoUrl = createVideoUrl(videoId);

        return (
            <li>
                <div className="title">{title}</div>
                <iframe src={videoUrl} title={title} />
            </li>
        );
    }
}
