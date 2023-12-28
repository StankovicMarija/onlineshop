import React, { useState } from 'react';
import Button from '../button/button';
import classes from './ImageSlider.module.css';
import noImg from '../assets/noimage.svg';

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgForSlider = images || [noImg];
  const imgLength = imgForSlider.length;

  const nextSlide = () => {
    setCurrentIndex(currentIndex === imgLength - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? imgLength - 1 : currentIndex - 1);
  };

  return (
    <section className={classes.slider}>
      {images && <Button className={classes.leftArrow} onClick={prevSlide}>&lt;</Button>}
      {images && <Button className={classes.rightArrow} onClick={nextSlide}>&gt;</Button>}
      <div>
        <img src={imgForSlider[currentIndex]} alt="someimage" className={classes.image} />
      </div>
    </section>
  );
}

export default ImageSlider;
