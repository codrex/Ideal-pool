// @flow
import React from 'react';
import './button.scss';

type ButtonType = 'button' | 'submit' | 'reset';
type Props = {
  text?: string,
  handleClick?: Function,
  className?: string,
  type?: ButtonType,
};
function Button(props: Props) {
  const {
    text, handleClick, className = '', type, ...rest
  } = props;
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`mdl-button mdl-button--raised btn ${className}`}
      {...rest}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: '',
  handleClick: () => {},
  className: '',
  type: 'button',
};

export default Button;
