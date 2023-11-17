import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductsItem from '../product/productsItem';
import SortBar from '../sortBar/SortBar';
import classes from './Home.module.css';

function Home() {
  const { data, sortType, category } = useContext(ProductContext);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    if (sortType === 'ascending') {
      const sortedData = data.sort((a, b) => (parseFloat(a.price) < parseFloat(b.price) ? -1 : 1));
      setSortedData(sortedData);
    } else if (sortType === 'descending') {
      const sortedData = data.sort((a, b) => (parseFloat(b.price) > parseFloat(a.price) ? 1 : -1));
      setSortedData(sortedData);
    }
  }, [sortType]);

  useEffect(() => {
    if (category) {
      const sortedData = data.filter((item) => item.category === category);
      setSortedData(sortedData);
    }
  }, [category]);

  const products = (sortType || category) ? sortedData : data;

  return products ? (
    <>
      <SortBar />
      <div className={classes.items}>
        {products.map((item) => (
          <ProductsItem item={item} key={item.id} />
        ))}
      </div>
    </>
  ) : null;
}

export default Home;
