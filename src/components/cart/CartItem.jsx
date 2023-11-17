import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import classes from './CartItem.module.css';

function CartItem({ cartItem }) {
  const {
    id, amount, name, price,
  } = cartItem;
  const { addMoreToCart, removeFromCart } = useContext(CartContext);

  return (
    <li className={classes.item} key={id}>
      <div>
        <h2>{name}</h2>
        <div className={classes.price}>{`$ ${(price * amount).toFixed(2)}`}</div>
      </div>
      <div className={classes.actions}>
        <div>
          <button type="button" onClick={() => removeFromCart(id)}>−</button>
          <button type="button" onClick={() => addMoreToCart(id)}>+</button>
        </div>
        <div className={classes.amount}>
          x
          {amount}
        </div>
      </div>
    </li>
  );
}

export default CartItem;
