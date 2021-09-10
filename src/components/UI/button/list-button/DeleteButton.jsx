import classes from "./ListButton.module.scss"

function DeleteButton({ children, customClassName, ...props }) {
  return (
    <button {...props} className={classes.button + " " + classes[customClassName]}>{children}</button>
  );
}

export default DeleteButton;