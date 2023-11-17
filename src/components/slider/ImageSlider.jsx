import React, { useState } from 'react';
import Button from '../button/button';
import classes from './ImageSlider.module.css';

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgLength = images.length;

  const nextSlide = () => {
    setCurrentIndex(currentIndex === imgLength - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? imgLength - 1 : currentIndex - 1);
  };

  return (
    <section className={classes.slider}>
      <Button className={classes.leftArrow} onClick={prevSlide}>&lt;</Button>
      <Button className={classes.rightArrow} onClick={nextSlide}>&gt;</Button>
      <div>
        <img src={images[currentIndex]} alt="someimage" className={classes.image} />
      </div>
    </section>
  );
}

export default ImageSlider;
