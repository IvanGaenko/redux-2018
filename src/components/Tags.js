import React, { PureComponent } from 'react';
import { arrayOf, shape, string } from 'prop-types';

export default class Tags extends PureComponent {
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
    const { items } = this.props;

    const tagsList =  items.map(item => {
    const { id } = item;
    // const tagSplit = tags.split(',');
    return (
      <div key={id}>{ item }</div>
    )
  });
  console.log(items);
  
  return <div>{ tagsList }Hello</div>
  }
}