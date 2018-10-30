// @flow
import React, { PureComponent } from 'react';

type Props = {
  label?: string,
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
    label: '',
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
      label, type, name, inputProps, className = '',
    } = this.props;
    const { value } = this.state;
    return (
      <div className={`mdl-textfield mdl-js-textfield ${className}`}>
        <input
          className="mdl-textfield__input"
          id={name}
          type={type}
          value={value}
          onChange={this.handleChange}
          {...inputProps}
        />
        {label && (
          <label className="mdl-textfield__label" htmlFor={name}>
            {label}
          </label>
        )}
      </div>
    );
  }
}

export default TextInput;
