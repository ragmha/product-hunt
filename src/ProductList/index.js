import React, { Component } from 'react';
import Product from '../Product';

import Data from '../data';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.handleProductUpVote = this.handleProductUpVote.bind(this);
    this.handleProductDownVote = this.handleProductDownVote.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    const products = Data.sort((a, b) => b.votes - a.votes);
    this.setState({ products: products });
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
        {this.renderProducts()}
      </div>
    );
  }
}

export default ProductList;
