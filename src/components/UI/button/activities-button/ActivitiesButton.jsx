import classes from "./ActivitiesButton.module.scss"

function UserActivitiesButton({ children, ...props }) {
  return (
    <button {...props} className={classes.activities__btn}>{children}</button>
  );
}

export default UserActivitiesButton;