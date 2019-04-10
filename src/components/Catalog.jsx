import React, { Component } from 'react'
import '../css/catalog.css';
import Product from './Product';


// const API = 'https://d34eedf5-6610-465f-8dcc-aed19b21dee4.mock.pstmn.io/api/v1/product'

class Catalog extends Component {

/* fetchProducts = async () => {
      try {
        const response = await fetch(API);
        const inventory = await response.json();
        
        this.setState ({
          productData: inventory
        });
      } catch (error) {
          this.setState({ error });
      }  
    } 

  componentDidMount() {
    this.fetchProducts();
  }
*/

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