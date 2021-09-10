import React from "react";
import classes from "./ModalAddSOng.module.scss";

function ModalAddSOng({children, visible, setVisible }) {
  const rootClasses = [classes.modal__wrapper];
  if (visible) { 
    rootClasses.push(classes.open);
  }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={classes.content} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default ModalAddSOng;

