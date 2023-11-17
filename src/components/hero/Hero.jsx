import React from 'react';
import saleImg from '../assets/sale.png';
import classes from './Hero.module.css';

function Hero() {
  return (
    <div className={classes.hero}>
      <img src={saleImg} alt="saleImage" className={classes.saleImg} />
      <h2 className={classes.linkText}>&#9758; Discover more </h2>
    </div>
  );
}

export default Hero;
