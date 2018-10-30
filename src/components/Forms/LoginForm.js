// @flow
import React, { PureComponent } from 'react';
import TextInput from '../TextInput';
import Button from '../Button';
import './form.scss';

type State = {
  email: string,
  password: string,
};
class LoginForm extends PureComponent<{}, State> {
  static Body(props: Object) {
    const { handleChange, email, password } = props;
    return (
      <form className="form__body">
        <TextInput
          label="Email"
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          className="form__input"
          required
        />
        <TextInput
          label="Password"
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          className="form__input"
          required
        />
      </form>
    );
  }

  static Footer() {
    const noAccount = "Don't have an account? ";

    return (
      <div className="form__footer">
        <Button type="submit" text="login" />
        <span className="form__create-account">
          {noAccount}
          <span>Create an account</span>
        </span>
      </div>
    );
  }

  state = {
    email: '',
    password: '',
  };

  handleChange = (name: string, value: string) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="form">
        <h3 className="form__header">Log in</h3>
        <LoginForm.Body email={email} password={password} handleChange={this.handleChange} />
        <LoginForm.Footer />
      </div>
    );
  }
}

export default LoginForm;