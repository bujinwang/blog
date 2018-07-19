import React, {PureComponent} from 'react';

class PostPreview extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <div className="post-preview">
        <a href="post.html">
          <h2 className="post-title">{this.props.title}
          </h2>
          <h3 className="post-subtitle">
            {this.props.subTitle}
          </h3>
        </a>
        <p className="post-meta">Posted by
          <a href="#">Start Bootstrap</a>
          {this.props.postTime}</p>
      </div>
    );
  }
}

export default PostPreview;
