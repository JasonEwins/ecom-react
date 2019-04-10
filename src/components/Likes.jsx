import React, { Component } from 'react';
import '../css/likes.css';

class Likes extends Component {

  render() {

    const { likedItems, showLikedItems, handleToggleLikes } = this.props;

    let handleOnChange = (likedItems) => {
        handleToggleLikes(likedItems);
    };

    return (
      <div>
        <button onClick={() => handleOnChange(likedItems)} className="like-button"><i className="far fa-thumbs-up fa-lg"></i>{likedItems.length}</button>
        <div className="like-list">
          <ul>
          {showLikedItems ?  likedItems.map(item =>
            <li className="like-list__item">{item}</li>) : null}
          </ul>
        </div>
      </div>
    )
  }
}

export default Likes;