import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import './Login.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action?.type === "USER_INPUT"){
    return {value: action?.value, isValid: action?.value.includes("@")};
  }
  if (action?.type === "INPUT_BLUR"){
    return {value: state.value, isValid: state.value.includes("@")};
  }
  return {value: '', isValid: false};
};

const passwordReducer = (state, action) => {
  if (action?.type === "USER_INPUT"){
    return {value: action?.value, isValid: action?.value.trim().length > 6};
  }
  if (action?.type === "INPUT_BLUR"){
    return {value: state.value, isValid: state.value.trim().length > 6};
  }
  return {value: '', isValid: false};
}

// const formValidReducer = (state, action) => {
//   if (action?.type === "USER_INPUT"){
//     return {value: action?.value};
//   }
//   return {value: false};
// }

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: undefined})
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: undefined});

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type: "USER_INPUT", value: event.target.value });

    // setFormIsValid(
    //   emailState?.isValid && passwordState?.isValid
    // );
    // dispatchFormState({type: "USER_INPUT", value: emailState?.isValid && passwordState?.isValid});
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type: "USER_INPUT", value: event.target.value});

    // setFormIsValid(
    //   emailState?.isValid && passwordState?.isValid
    // );
    // dispatchFormState({type: "USER_INPUT", value: emailState?.isValid && passwordState?.isValid});
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState?.isValid);
    dispatchEmail({type: "INPUT_BLUR"})
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(passwordState?.isValid);
    dispatchPassword({type: "INPUT_BLUR"});
  };

  // useEffect(() => {
  //   // const isEmailValid = enteredEmail.includes('@');
  //   // const isPasswordValid = enteredPassword.trim().length > 6;
  //   // isEmailValid ? setEmailIsValid(true) : setEmailIsValid(false);
  //   // isPasswordValid ? setPasswordIsValid(true) : setPasswordIsValid(false);
  //   // if (isEmailValid && isPasswordValid){
  //   // setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
  //   // }
  //   const identifier = setTimeout(() => {
  //     console.log("checking form validity");
  //     setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
  //   }, 500); //only validate if user delay typing in 500ms
  //   return () => {
  //     console.log("Cleanup");
  //     clearTimeout(identifier); // reset timer
  //   }; //cleanup function, will be called before useEffect, except for the first time useEffect is called
  // }, [enteredEmail, enteredPassword]);

  // const {isValid: emailIsValid} = emailState; //destructuring and alias
  // const {isValid: passwordIsValid} = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("checking form validity");
      setFormIsValid(passwordState.isValid && emailState.isValid);
    }, 400);
    return () => {
      console.log("Cleanup");
      clearTimeout(identifier);
    };
  }, [passwordState.isValid, emailState.isValid]);
  // const [formValidState, dispatchFormState] = useReducer(formValidReducer, {value: false});

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState?.value, passwordState?.value);
  };

  return (
    <Card className="login">
      <form onSubmit={submitHandler}>
        <div
          className={`control ${
            emailState?.isValid === false ? "invalid" : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`control ${
            passwordState?.isValid === false ? "invalid" : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className="actions">
          <Button type="submit" className="btn" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
