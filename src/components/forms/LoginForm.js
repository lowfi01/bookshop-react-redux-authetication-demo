import React, { Component } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "../messages/InlineError";
import { PropTypes } from "prop-types";

class LoginForm extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChangeString = e =>
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });

  onSubmit = e => {
    const errors = this.validate(this.state.data);

    this.setState({
      errors
    });

    // You can also use _isEmpty from lodash to check if errors is empty
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};

    if (!data.password) errors.password = "Can't be blank!";
    if (!Validator.isEmail(data.email)) errors.email = "Invalid Email";

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Form loading={loading} onSubmit={this.onSubmit}>
        {errors.global && (
          <Message negative>
            <Message.Header>Something went wrong!!</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@example.com"
            value={data.email}
            onChange={this.onChangeString}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Make it hard :D"
            value={data.password}
            onChange={this.onChangeString}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Button primary> Login </Button>
      </Form>
    );
  }
}

LoginForm.prototypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
