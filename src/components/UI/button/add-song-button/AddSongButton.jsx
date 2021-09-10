import classes from "./AddSongButton.module.scss"

function AddSongButton({ children, customClassName, ...props }) {
  return (
    <button {...props} className={classes.add__song}>{children}</button>
  );
}

export default AddSongButton;