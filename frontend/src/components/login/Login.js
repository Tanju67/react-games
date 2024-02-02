import React from "react";
import classes from "./Login.module.css";
import Input from "../shared/UIElemets/Input";
import { useForm } from "../shared/hooks/form-hook";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../utils/validators";
import { NavLink } from "react-router-dom";
import Button from "../shared/UIElemets/Button";

function Login() {
  const [inputHandler, formState] = useForm({
    email: { value: "", isValid: false },
    password: { value: "", isValid: false },
    isValid: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.login}>
      <form onSubmit={submitHandler} className={classes.loginForm}>
        <h2>LOGIN</h2>
        <p>
          Doesn't have an account yet?{" "}
          <NavLink to={"/register"}>Register</NavLink>
        </p>
        <Input
          id="email"
          element="input"
          type="email"
          label="Email"
          placeholder="Email"
          errorMsg="Please enter a valid email!"
          onInput={inputHandler}
          validators={[VALIDATOR_EMAIL()]}
        />

        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          placeholder="Password"
          errorMsg="Please enter a valid password!"
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH(6)]}
        />

        <Button className={formState.isValid ? "" : classes.invalid}>
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
