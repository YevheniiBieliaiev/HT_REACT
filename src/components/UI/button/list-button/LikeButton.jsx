import classes from "./ListButton.module.scss"

function LikeButton({ children, customClassName, ...props }) {
  return (
    <button {...props} className={classes.button + " " + classes[customClassName]}>{children}</button>
  );
}

export default LikeButton;