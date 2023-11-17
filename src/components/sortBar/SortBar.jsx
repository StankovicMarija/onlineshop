import React, { useContext, useCallback } from 'react';
import { ProductContext } from '../context/ProductContext';
import classes from './SortBar.module.css';

function SortBar() {
  const {
    data, setSortedData, setSortType, setCategory,
  } = useContext(ProductContext);

  const handleSort = useCallback((value) => {
    setSortType(value);
    if (value === 'ascending') {
      const sortedAsc = data.sort((a, b) => (parseFloat(a.price) < parseFloat(b.price) ? -1 : 1));
      setSortedData(sortedAsc);
    }
    if (value === 'descending') {
      const sortedDesc = data.sort((a, b) => (parseFloat(b.price) > parseFloat(a.price) ? 1 : -1));
      setSortedData(sortedDesc);
    }
  }, []);

  const handleFiltering = useCallback((value) => {
    setCategory(value);
    const filteredData = data.filter((item) => item.category === value);
    setSortedData(filteredData);
  }, []);

  return (
    <div className={classes.sortBar}>
      <form>
        <div>
          <span className={classes.label}>Filter by Category: </span>
          <select
            name="category"
            id="category"
            onChange={(e) => handleFiltering(e.target.value)}
            className={classes.options}
            defaultValue=""
          >
            <option value="" disabled>All</option>
            <option value="accessories">accessories</option>
            <option value="apparel">apparel</option>
            <option value="bags">bags</option>
            <option value="drinkware">drinkware</option>
            <option value="office">office</option>
            <option value="shop by brand">shop by brand</option>
          </select>
        </div>
        <span htmlFor="sortPrice" className={classes.label}>Sort products by price: </span>
        <select id="sortPrice" onChange={(e) => handleSort(e.target.value)} defaultValue="" className={classes.options}>
          <option value="" disabled>All</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </form>
    </div>
  );
}

export default SortBar;
