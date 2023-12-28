import classes from './Images.module.css';
import noImg from './assets/noimage.svg';

function Image({ image }) {
  const imgUrl = image ? image.slice(',')[0] : noImg;

  return (
    <div className={classes.imgWrapper}>
      <img src={imgUrl} alt="img" className={classes.img} />
      {image && <div className={classes.imgText}>See more...</div>}
    </div>
  );
}

export default Image;
