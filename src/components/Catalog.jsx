import React, { Component } from 'react'
import '../css/catalog.css';
import Product from './Product';

class Catalog extends Component {

  render() {

    const { addLikedItem } = this.props;
  
    return (
      <div className="catalog-container">
        <div className="product-menu">
          <p>{this.props.productCount} items</p>
          <button className="button__hide-sold" onClick={this.props.hideSoldItems}>Hide sold items</button>
        </div>
        <div className="product-container">
          <Product {...this.props} addLikedItem={addLikedItem}/>
        </div>
      </div>
    )
  }
}

export default Catalog;