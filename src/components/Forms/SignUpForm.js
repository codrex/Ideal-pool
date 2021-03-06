// @flow
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../constant';
import TextInput from '../TextInput';
import Button from '../Button';
import './form.scss';

type State = {
  email: string,
  password: string,
  name: string,
};

type Props = {
  signUpUser: Function,
};
class SignUpForm extends PureComponent<Props, State> {
  static Body(props: Object) {
    const {
      handleChange, email, password, name,
    } = props;
    return (
      <form className="form__body">
        <TextInput
          placeholder="Name"
          name="name"
          type="text"
          handleChange={handleChange}
          value={name}
          className="form__input"
        />
        <TextInput
          placeholder="Email"
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          className="form__input"
        />
        <TextInput
          placeholder="Password"
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          className="form__input"
        />
      </form>
    );
  }

  static Footer({ submitForm }: { submitForm: Function }) {
    return (
      <div className="form__footer">
        <Button type="submit" text="signup" handleClick={submitForm} />
        <span className="form__create-account">
          Already have an account?
          <Link to={routes.login}>
            <span> Log in</span>
          </Link>
        </span>
      </div>
    );
  }

  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = (name: string, value: string) => {
    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.signUpUser(this.state);
  };

  render() {
    const { email, password, name } = this.state;
    return (
      <div className="form">
        <h3 className="form__header">Sign up</h3>
        <SignUpForm.Body
          email={email}
          password={password}
          handleChange={this.handleChange}
          name={name}
        />
        <SignUpForm.Footer submitForm={this.submitForm} />
      </div>
    );
  }
}

export default SignUpForm;
