import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import classes from './SortBar.module.css';

function SortBar() {
  const { setSortType, setCategory } = useContext(ProductContext);

  return (
    <div className={classes.sortBar}>
      <form>
        <div>
          <span className={classes.label}>Filter by Category:  </span>
          <select
            name="category"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
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
        <span htmlFor="sortPrice" className={classes.label}>Sort products by price:  </span>
        <select id="sortPrice" onChange={(e) => setSortType(e.target.value)} defaultValue="" className={classes.options}>
          <option value="" disabled>All</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </form>
    </div>
  );
}

export default SortBar;
