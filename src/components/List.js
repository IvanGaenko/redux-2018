import React, { PureComponent } from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
// import Tags from './Tags';

const getVideoId = (url) => url.split('=')[1] || url.split('/')[3];
const createVideoUrl = (id) => `https://www.youtube.com/embed/${id}`;

export default class List extends PureComponent {
  static propTypes = {
    delVid: func.isRequired,
    items: arrayOf(shape({
      id: string,
      title: string,
      url: string,
      tags: string,
    })),
  };

  static defaultProps = {
    items: [],
  };

  render() {
    const { items, delVideo, editVideo, totalVideoAmount } = this.props;

    const list = items.map(item => {
      return ( 
        <ListItem
          key={item.id}
          delVideo={delVideo}
          editVideo={editVideo}
          {...item}
        />
      )});

    return (
      <Fragment>
        <span>Total videos: {items.length}/{totalVideoAmount}</span>
        <ul>
          {list}
        </ul>
      </Fragment>
    );
  }
}
