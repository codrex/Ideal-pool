// @flow
import React, { PureComponent } from 'react';
import './button.scss';

type ButtonType = 'button' | 'submit' | 'reset';
type Props = {
  text?: string,
  handleClick?: Function,
  className?: string,
  type?: ButtonType,
  fab?: boolean,
};
class Button extends PureComponent<Props> {
  static defaultProps = {
    text: '',
    handleClick: () => {},
    className: '',
    type: 'button',
    fab: false,
  };

  static Fab(props: Object) {
    const { handleClick, className = '', ...rest } = props;
    return (
      <button
        className={`mdl-button mdl-js-button mdl-button--fab btn btn--fab ${className}`}
        onClick={handleClick}
        type="button"
        {...rest}
      >
        <div className="btn__plus-icon" />
      </button>
    );
  }

  static Normal(props: Props) {
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

  render() {
    const { fab, ...rest } = this.props;
    return fab ? <Button.Fab {...rest} /> : <Button.Normal {...rest} />;
  }
}

export default Button;
