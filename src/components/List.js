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
    const { items, delVid } = this.props;

    const list = items.map(item => {
      
      const { url, id, title, tags } = item;

      const videoId = getVideoId(url);

      const tagSplit = tags.split(',');
     
      });
      
      return (
        <li key={id}>
          <div>
            <div className="title"> {title} </div>
            <button onClick={() => delVid(item.id)}>Close</button>
          </div>
          <iframe src={createVideoUrl(videoId)} title={title}/>
          <button>Edit</button>
          
        </li>
      )
    };

    return (
      <ul>
        {list}
      </ul>
    )
  }
  
}