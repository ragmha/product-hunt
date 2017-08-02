import React, { Component } from 'react';
import Product from '../Product';

import Data from '../data';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      sort: false,
    };
    this.handleProductUpVote = this.handleProductUpVote.bind(this);
    this.handleProductDownVote = this.handleProductDownVote.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    this.sortDecending();
  }

  handleProductUpVote(productId) {
    Data.forEach(elem => {
      if (elem.id === productId) {
        elem.votes += 1;
        return;
      }
    });

    this.updateState();
  }

  handleProductDownVote(productId) {
    Data.forEach(elem => {
      if (elem.id === productId) {
        elem.votes -= 1;
        return;
      }
    });

    this.updateState();
  }

  sortAscending() {
    let products = Data.sort((a, b) => a.votes - b.votes);
    this.setState({ products: products, sort: true });
  }

  sortDecending() {
    let products = Data.sort((a, b) => b.votes - a.votes);
    this.setState({ products: products, sort: false });
  }

  sort() {
    if (!this.state.sort) {
      this.sortAscending();
    } else {
      this.sortDecending();
    }
  }

  renderProducts() {
    return this.state.products.map(product =>
      <Product
        key={product.id}
        onUpVote={this.handleProductUpVote}
        onDownVote={this.handleProductDownVote}
        {...product}
      />
    );
  }
  render() {
    return (
      <div className="ui items">
        <button onClick={this.sort.bind(this)}>
          <i
            className={`sort ${this.state.sort
              ? 'descending '
              : 'ascending'} icon`}
          />{' '}
          Sort
        </button>
        {this.renderProducts()}
      </div>
    );
  }
}

export default ProductList;
