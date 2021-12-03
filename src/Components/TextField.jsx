import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextField(props) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="filled-basic"
        label={props.placeholder}
        variant="filled"
        className="input"
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </Box>
  );
}
