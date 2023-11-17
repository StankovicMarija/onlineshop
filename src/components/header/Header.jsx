import React from 'react';
import CartButton from './CartButton';

import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <h1>Online shop</h1>
      <CartButton />
    </header>
  );
}

export default Header;
