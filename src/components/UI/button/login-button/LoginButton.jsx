import classes from "./LoginButton.module.scss"

function LoginButton({ children, ...props }) {
  return (
    <button {...props} className={classes.login}>{children}</button>
  );
}

export default LoginButton;