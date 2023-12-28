import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';
import { CartContext } from '../context/CartContext';
import CartIcon from './CartIcon';
import classes from './CartButton.module.css';

function HeaderCartButton() {
  const { openModal } = useContext(ModalContext);
  const { numOfItems } = useContext(CartContext);

  return (
    <button type="button" className={classes.button} onClick={openModal}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.btnName}>YOUR CART</span>
      <span className={classes.badge}>{numOfItems}</span>
    </button>
  );
}

export default HeaderCartButton;
