// import React from "react";

// function Button(props) {
//   return (
//     <button className={props.class} type={props.type}>
//       {props.label}
//     </button>
//   );
// }

// export default Button;
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButton(props) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" className={props.class} type={props.type}>
        {props.label}
      </Button>
    </Stack>
  );
}
