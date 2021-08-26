import React from "react";
import TextField from "@material-ui/core/TextField";

const TextFieldComponent = (props) => {
  return (
    <div>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id={props.id}
        label={props.label}
        name={props.name}
        type={props.type}
        autoFocus
        onChange={props.onChange}
      />
    </div>
  );
};

export default TextFieldComponent;
