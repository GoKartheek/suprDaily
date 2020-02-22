
import React, { useState } from 'react';
import './style.css';
import back from '../../assets/back.png';
import next from '../../assets/next.png';

const Tile = ({ product }) => (
  <div className="tile">
    <img src={product.product_image} className="product-image" alt="product" />
    <div className="product-info">
      <div className="product-title">{product.name}</div>
      <div className="product-price">{`₹${product.price}`}</div>
      <div className="categories">
        {
          product.categories.map((category, index) => (
            <div className="category" key={`category-${index}`}>{category}</div>
          ))
        }
      </div>
    </div>
  </div>
)

const Carousel = ({ products }) => {
  const [startIndex, setStartIndex ] = useState(0);
  const [endIndex, setEndIndex ] = useState(3);

  const showNext = () => {
    if(endIndex <= products.length) {
      setStartIndex(startIndex + 3);
      setEndIndex(endIndex + 3)
    }
  }

  const showPrevious = () => {
    if(startIndex > 0) {
      setStartIndex(startIndex - 3);
      setEndIndex(endIndex - 3)
    }
  }

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <img src={back} className="icon" alt="icon" onClick={showPrevious} />
        <div className="products">
          {
            products.slice(startIndex, endIndex).map(product => <Tile key={product.name} product={product}/>)
          }
        </div>
        <img src={next} className="icon" alt="icon" onClick={showNext} />
      </div>
    </div>
  );
  
}

export default Carousel;