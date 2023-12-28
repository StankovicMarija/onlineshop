import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import Hero from '../hero/Hero';
import ProductsItem from '../product/productsItem';
import SortBar from '../sortBar/SortBar';
import classes from './Home.module.css';

function Home() {
  const {
    data, sortType, category, sortedData,
  } = useContext(ProductContext);

  const products = (sortType || category) ? sortedData : data;

  return products ? (
    <>
      <Hero />
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
