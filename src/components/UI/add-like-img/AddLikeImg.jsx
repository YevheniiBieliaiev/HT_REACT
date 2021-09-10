import classes from "./AddLikeImg.module.scss";

function AddLike({ src, alt, ...props }) {
  return (
    <img {...props} className={classes.heart} src={src} alt={alt} />
  );
}

export default AddLike;