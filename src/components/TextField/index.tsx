import { TextField, TextFieldProps } from "@mui/material";
import { MuiTextFieldStyles } from "./styles";

export const MuiTextField = ({ ...props }: TextFieldProps) => {
  return <TextField {...props} sx={MuiTextFieldStyles} />;
};
