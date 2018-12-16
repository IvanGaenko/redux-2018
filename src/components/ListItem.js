import React, { PureComponent, Fragment } from 'react';

const getVideoId = (url) => url.split('/')[3];
const createVideoUrl = (id) => `https://www.youtube.com/embed/${id}`;

const VIEW_MODE = false;
const EDIT_MODE = true;

export default class ListItem extends PureComponent {
  state = {
    mode: VIEW_MODE,
    values: {
      title: this.props.title,
      tags: this.props.tags
    }
  };

  switchMode = () => {
    this.setState({
      mode: this.state.mode ? VIEW_MODE : EDIT_MODE
    });
  };

  delVideo = () => {
    this.props.delVideo(this.props.id);
  }

  onChangeValue = ({ target: { name, value } }) => {
    this.setState(state => ({
      values: {
        ...state.values,
        [name]: value,
      }
    }));
  };

  saveEdit = () => {
    this.props.editVideo(this.props.id, {
      title: this.state.values.title,
      tags: this.state.values.tags
    });
    this.switchMode();
  }

  render() {
    const { id, url, title, tags } = this.props;

    const videoId = getVideoId(url);
    const videoUrl = createVideoUrl(videoId);

    const titleEditTrue = (
      <Fragment>
        <input
          type="text"
          name="title"
          value={this.state.values.title}
          onChange={this.onChangeValue}
        />
        <button
          type="submit"
          onClick={this.saveEdit}>
          OK
        </button>
        <button onClick={this.switchMode}>
          Cancel
        </button>
      </Fragment>
    )
    
    const titleEditFalse = (
      <Fragment>
        <div> { title } </div>
        <button onClick={this.switchMode} >&#9998;</button>
      </Fragment>
    )
    
    const tagsEditTrue = (
      <input
        type="text"
        name="tags"
        value={this.state.values.tags}
        onChange={this.onChangeValue}
      />
    )
    
    const tagsEditFalse = tags.split(', ').map((item, index) => {
      return (
        <div key={index}>
          {item}
        </div>
      );
    });

    return (
      <li key={id}>
        <div>
          {this.state.mode ? titleEditTrue : titleEditFalse }
        </div>
        <button onClick={this.delVideo}>Delete</button>
        
        <iframe src={videoUrl} title={title} />
        
        <div>
          {this.state.mode ? tagsEditTrue : tagsEditFalse }
        </div>
      </li>
    );
  }
}
