import React, { Component } from 'react';
import './App.css';

import ProductList from './ProductList';

class App extends Component {
  render() {
    return (
      <div className="main ui text container">
        <h1 className="ui dividing centered header">Popular Products</h1>
        <ProductList />
      </div>
    );
  }
}

export default App;
