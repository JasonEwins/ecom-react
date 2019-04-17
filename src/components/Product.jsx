import React, { Component } from 'react';
import '../css/product.css';

class Product extends Component {

  render() {
    const { mockProducts, addLikedItem  } = this.props;

    let handleOnChange = (id) => {
      addLikedItem(id);
    };

    return (
      <div className="items-container">
        {mockProducts.map(product => (
          <div key={product.id} id={product.id}>
          {product.sold ?
          <div className="product-sold-container">
            <div className="product__sold">sold - too<span role="img" aria-label="fire emoji">🔥</span></div>
            <img className="product__img" src={product.img} alt="product"/>
          </div> 
            : <img className="product__img" src={product.img} alt="product"/>
          }
            <h3 className="product__title">{product.title}</h3>
            <div className="product__brand">@{product.brand}</div>
            <div className="product-details">
              <div className="product__size">{product.size}</div>
              <div className="product__price">{product.price}</div>
              <span onClick={() => handleOnChange(product.id)}><i className="far fa-thumbs-up fa-2x product__like"></i></span>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Product;