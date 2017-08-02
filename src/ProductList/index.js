import React, { Component } from 'react';
import Product from '../Product';

import Data from '../data';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: Data(),
    };
  }

  renderProducts() {
    return this.state.products.map(product =>
      <Product key={product.id} {...product} />
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
