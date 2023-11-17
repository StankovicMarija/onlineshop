import React, { useState, createContext } from 'react';
import useFetch from '../useFetch';

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [sortType, setSortType] = useState('');
  const [category, setCategory] = useState('');

  const url = 'data/data.json';
  const { data } = useFetch(url); // cors

  return (
    <ProductContext.Provider value={{
      data, setSortType, sortType, setCategory, category,
    }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
