import React, { useState } from 'react';
import './style.css';

const Categories = ({ products, filterProducts }) => {
  let categories = []
  products.forEach(product => categories.push(...product.categories))
  categories = [...new Set(categories)]
  return (
    <div className="categories-wrapper">
      {
        categories.map(category => (
          <div 
            key={category} 
            className={'main'}
            onClick={() => filterProducts(category)}
          >
            {category}
          </div>
        ))
      }
    </div>
  )
}

export default Categories;