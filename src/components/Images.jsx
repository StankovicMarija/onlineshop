import classes from './Images.module.css';

function Image({ image }) {
  const imgUrl = image ? image.slice(',') : '';

  return (image ? (
    <div className={classes.imgWrapper}>
      <img src={imgUrl[0]} alt="img" className={classes.img} />
      <div className={classes.imgText}>See more...</div>
    </div>
  ) : <div />);
}

export default Image;
