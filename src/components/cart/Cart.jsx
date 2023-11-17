import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ModalContext } from '../context/ModalContext';
import Modal from '../UI/Modal';
import icon from '../assets/Shopping Cart.svg';
import Button from '../button/button';

import classes from './Cart.module.css';
import CartItem from './CartItem';

function Cart() {
  const { showModal, closeModal } = useContext(ModalContext);
  const { cart } = useContext(CartContext);
  const isEmpty = cart.length === 0;

  return (
    showModal && (
    <Modal onClose={closeModal} showModal={showModal}>
      <div className={classes.captWrapp}>
        <h1>Shoping cart</h1>
        <img src={icon} alt="shoping-bag" />
      </div>
      {isEmpty && <p className={classes.text}>Your shopping bag is empty...</p>}
      <ul className={classes.shpgList} key="">
        {cart.map((item) => <CartItem key={Math.random()} cartItem={item} />)}
      </ul>
      <div className={classes.cartBtn}>
        <Button onClick={closeModal}>Close</Button>
        <Button>Order</Button>
      </div>
    </Modal>
    )
  );
}

export default Cart;
