import React from "react";

function Input(props) {
  return (
    <input
      autocomplete="off"
      name={props.name}
      onChange={props.onChangeFunction}
      value={props.value}
      type="text"
      placeholder={props.placeholder}
    />
  );
}

export default Input;
