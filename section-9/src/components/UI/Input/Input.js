import React, {useRef, useImperativeHandle} from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef()
    const activate = () => {
        inputRef.current.focus();
    }
    useImperativeHandle(ref, () => {
        return {
            focus: activate
        };
    })
  return (
    <div className={`${classes.control}`}>
      <label className={classes.label} htmlFor={props.type}>
        {props.name}
      </label>
      <input
        ref={inputRef}
        className={`${classes.input} ${
          props.isValid === false ? classes.invalid : ""
        }`}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
