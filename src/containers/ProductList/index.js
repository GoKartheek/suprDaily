import React, { useState, useEffect } from 'react';
import './style.css';
import Layout from '../../components/Layout';
import Categories from '../../components/Categories';
import Carousel from '../../components/Carousel';

const ProductList = () => {
  const [ products, setProducts ] = useState([]);
  // const [ categories, setCategories ] = useState([]);
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/GoKartheek/productsData/data')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const filterProducts = (value) => {
    let filterProducts = products.filter(product => product.categories.includes(value))
    setProducts(filterProducts)
  }

  return (
    <Layout>
      <Categories
        products={products}
        filterProducts={filterProducts} 
      />
      <Carousel products={products}/>
    </Layout>
  )
}

export default ProductList;