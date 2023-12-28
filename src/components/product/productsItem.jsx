import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Card from '../UI/Card';
import Image from '../Images';
import Button from '../button/button';
import classes from './productsItem.module.css';

function ProductsItem({ item }) {
  const { addToCart } = useContext(CartContext);
  const {
    id, images, name, category, price,
  } = item;

  return (
    <Card key={id}>
      <Link to={`/product/${id}`}>
        <Image image={images} id={id} />
      </Link>
      <div className={classes.description}>
        <h1>{category}</h1>
        <Link to={`/product/${id}`} className={classes.title}>{name}</Link>
        <div className={classes.wrapper}>
          <div className={classes.price}>
            {price}
            $
          </div>
          <Button variant="card" onClick={() => addToCart(item, id)}>+ Add to Cart</Button>
        </div>
      </div>
    </Card>
  );
}

export default ProductsItem;
