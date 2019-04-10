import React, { Component } from 'react';
import '../css/app.css';
import NavBar from './NavBar';
import Catalog from './Catalog';
import inventory from '../data/Inventory';


class App extends Component {

  constructor(props) {
    super(props)
      this.state = {
      // productData: [],
      // error: null,
      mockProducts: [...inventory],
      productCount: null,
      soldItems: [],
      likedItems: [],
      showLikedItems: false
      }
  }

  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        ele.classList.add('available')
        setTimeout(() => {
          ele.outerHTML = ''
        }, 2000)
      }
    })
    const totalItems = this.state.mockProducts.length;
    this.setState ({
      productCount: totalItems
    })
  }

  addLikedItem = (id) => {
    const item = this.state.mockProducts
      .filter(product => product.id === id)
      .map(product => product.title);
    
    // check to see if item has already been liked
    if (!this.state.likedItems.includes(item.toString())) {
      this.state.likedItems.push(...item);
    
      this.setState({
        likedItems: this.state.likedItems  
      });
    }
    else {
      // if item has been liked remove from list
      let index = this.state.likedItems.indexOf(item.toString());
      let removeItems = this.state.likedItems.splice(index, 1)

      this.setState(state => ({
        likedItems: this.state.likedItems
      }))
    }
  }

  handleToggleLikes = (likedItems) => {
    if (likedItems.length) {
      this.setState(state => ({
        showLikedItems: !this.state.showLikedItems
      }));
    }
  }

  hideSoldItems = () => {
    const soldItem = this.state.mockProducts
      .filter(product => product.sold)
      .map(product => product.id)

      let soldItemId = parseInt(soldItem);
      
      let availableItems = this.state.mockProducts.filter(items => {
        return items.id !== soldItemId
      });
    
    this.setState({
      mockProducts: availableItems,
      productCount: availableItems.length
      })
  }

  render() {
    return (
      <div>
        <NavBar {...this.state} handleToggleLikes={this.handleToggleLikes}/>
        <Catalog {...this.state} addLikedItem={this.addLikedItem} hideSoldItems={this.hideSoldItems}/>
      </div>
    );
  }
}

export default App;
