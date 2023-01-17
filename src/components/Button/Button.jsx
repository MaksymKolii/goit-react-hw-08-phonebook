import css from './Button.module.css';
import {  ButtonB } from './Button.styled';

export const Button = ({ text, clickHandler, type }) => {
  return (
    <ButtonB type={type} onClick={clickHandler}>
      {text}
    </ButtonB>
  );
};

export const IButton = ({ children, clickHandler, ...allyProps }) => (
  <button
    type="button"
    className={css.IButton}
    onClick={clickHandler}
    {...allyProps}
  >
    {children}
  </button>
);
