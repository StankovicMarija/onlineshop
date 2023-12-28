import React, { useContext } from 'react';
import parse from 'html-react-parser';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';
import ImageSlider from '../slider/ImageSlider';
import Button from '../button/button';
import classes from './ProductDetails.module.css';

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { data } = useContext(ProductContext);

  const productItem = data.find((item) => item.id === id);
  const el = parse(productItem.features);

  return (data && (
    <div className={classes.product}>
      <Link to="/" className={classes.backLink}>&#8678; Back to Home</Link>
      <section className={classes.name}>
        <h1>{productItem.name}</h1>
        <div className={classes.description}>
          <h2>Product description:</h2>
          <h3>{productItem.description}</h3>
        </div>
      </section>
      <div className={classes.imgContainer}>
        <section className={classes.slider}>
          <ImageSlider images={productItem.images} />
        </section>
        <section className={classes.features}>
          <h2>Product features:</h2>
          <ul>{el}</ul>
        </section>
      </div>
      <section className={classes.addItem}>
        <p>
          CATEGORY:
          {' '}
          {productItem.category.toUpperCase()}
        </p>
        <p>
          SUBCATEGORY:
          {' '}
          {productItem.subcategory.toUpperCase()}
        </p>
        <p>
          PRODUCT NUM:
          {' '}
          {productItem.id}
        </p>
        <div className={classes.price}>
          $
          {productItem.price}
        </div>
        <Button variant="card" onClick={() => addToCart(productItem, id)}>+ Add to Cart</Button>
      </section>
    </div>
  ));
}

export default ProductDetails;
