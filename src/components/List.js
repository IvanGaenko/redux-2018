import React, { PureComponent, Fragment } from 'react';
import { arrayOf, shape, string } from 'prop-types';

import ListItem from './ListItem';

export default class List extends PureComponent {
  static propTypes = {
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
