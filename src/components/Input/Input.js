import { TextField } from "@mui/material";

const Input = ({ label, type, value, onChange }) => {
  return (
    <TextField
      onChange={onChange}
      label={label}
      type={type}
      value={value}
      variant="outlined"
    />
  );
};

export default Input;
