// @flow
import React, { PureComponent } from 'react';
import './text-input.scss';

type Props = {
  placeholder?: string,
  value?: string,
  type?: string,
  handleChange?: Function,
  name: string,
  inputProps?: Object,
  className?: string,
};

type State = {
  value: string,
};
class TextInput extends PureComponent<Props, State> {
  static defaultProps = {
    placeholder: '',
    value: '',
    type: 'text',
    handleChange: () => {},
    inputProps: {},
    className: '',
  };

  state = {
    value: this.props.value || '',
  };

  handleChange = (event: SyntheticInputEvent<>) => {
    const { value, name } = event.target;
    const { handleChange } = this.props;
    this.setState({ value });
    if (typeof handleChange === 'function') handleChange(name, value);
  };

  render() {
    const {
      placeholder, type, name, inputProps, className = '',
    } = this.props;
    const { value } = this.state;
    return (
      <div className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label ${className}`}>
        <input
          className="mdl-textfield__input"
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={this.handleChange}
          placeholder={placeholder}
          {...inputProps}
        />
      </div>
    );
  }
}

export default TextInput;
