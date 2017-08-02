import React, { Component } from 'react';

class Product extends Component {
  handleUpVote() {
    this.props.onUpVote(this.props.id);
  }
  handleDownVote() {
    this.props.onDownVote(this.props.id);
  }

  render() {
    const props = this.props;
    return (
      <div className="item">
        <div className="image">
          <img src={props.product_image_url} />
        </div>
        <div className="middle aligned content">
          <div className="header">
            {props.votes}
            <a onClick={this.handleUpVote.bind(this)}>
              <i className="large caret up icon" />
            </a>
            <a onClick={this.handleDownVote.bind(this)}>
              <i className="large caret down icon" />
            </a>
          </div>
          <div className="description">
            <a href={props.url}>
              {props.title}
            </a>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img className="ui avatar image" src={props.submitter_avatar_url} />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
