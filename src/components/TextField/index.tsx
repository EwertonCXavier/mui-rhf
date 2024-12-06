import { Box, InputLabel, TextField, TextFieldProps } from "@mui/material";
import { Control, Controller, FieldErrors } from "react-hook-form";

type IForm = {
  last_name: string;
  email: string;
  password: string;
  first_name: string;
};

type IMuiTextField = {
  control: Control<IForm> | undefined;
  errors: FieldErrors<IForm>;
  name: keyof IForm;
  placeholder: string;
} & TextFieldProps;

export const MuiTextFieldComponent = ({
  control,
  errors,
  name,
  placeholder,
}: IMuiTextField) => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            placeholder={placeholder}
            error={!!errors[name]?.message}
            sx={{
              width: "100%",
              flex: 1,
              color: "#fff",
            }}
            {...field}
          />
        )}
      />
      {errors[name]?.message != null && (
        <InputLabel
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            color: "#D32F2F",
          }}
        >
          {errors[name].message}
        </InputLabel>
      )}
    </Box>
  );
};
