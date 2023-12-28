import React from 'react';
import classNames from 'classnames';
import classes from './button.module.css';

function Button({
  variant, children, onClick, className,
}) {
  const cls = classNames(classes.button, className, {
    [classes.card]: variant === 'card',
    [classes.page]: variant === 'back',
  });

  return (
    <button onClick={onClick} type="button" className={cls}>
      {children}
    </button>
  );
}

export default Button;
