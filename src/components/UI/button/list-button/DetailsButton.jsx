import classes from "./ListButton.module.scss"

function DetailsButton({ children, customClassName, ...props }) {
  return (
    <button {...props} className={classes.button + " " + classes[customClassName]}>{children}</button>
  );
}

export default DetailsButton;