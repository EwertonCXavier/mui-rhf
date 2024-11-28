import {
  Box,
  IconButton,
  InputAdornment,
  Link,
  Typography,
} from "@mui/material";
// import { ReactComponent as EyeIcon } from "../../assets/eye.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { DefaultButton } from "../../components/Button";
import { MuiTextField } from "../../components/TextField";
import { CardContainer, MainContainer, StyledImageCard } from "./styles";

// Criando um objeto de validação do Yup com as propriedades do formulário
const formSchema = yup.object({
  first_name: yup
    .string()
    .min(2, "Nome deve ter 2 ou mais caracteres")
    .required("Campo Nome é obrigatório"),
  last_name: yup.string().min(2).required("Campo sobrenome é obrigatório"),
  email: yup
    .string()
    .email("Campo email deve ser do tipo e-mail")
    .required("Campo email é obrigatório"),
  password: yup
    .string()
    .min(6, "Deve conter, ao menos, 6 caracteres")
    .max(12, "Deve ter, no máximo, 12 caracteres")
    .required("Campo senha é obrigatório"),
  // new_password: yup.boolean(),
});

// Criação da interface do formulário
type FORM_SCHEMA_TYPE = yup.InferType<typeof formSchema>;

export const Home = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FORM_SCHEMA_TYPE>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(formSchema),
  });

  const abacaxi = (data: unknown) => {
    console.log("data: ", data);
  };

  useEffect(() => {
    console.log("errors: ", errors);
  }, [errors]);

  return (
    <Box component="main" sx={MainContainer}>
      <Box sx={CardContainer}>
        <Box sx={StyledImageCard}></Box>
        <Box component={"aside"}>
          <Box>
            <Box>
              <Typography
                variant="h4"
                fontWeight={"bold"}
                sx={{
                  color: "#fff",
                }}
              >
                Create an account
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                }}
              >
                Already have an account?
              </Typography>
              <Link>Log in</Link>
            </Box>
          </Box>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
            onSubmit={handleSubmit(abacaxi)}
          >
            <Box
              sx={{
                display: "flex",
                gap: "32px",
              }}
            >
              {/* Criação do primeiro Controller */}
              <Controller
                name="first_name"
                control={control}
                render={({ field }) => (
                  <MuiTextField placeholder="First name" {...field} />
                )}
              />
              {/* Criação do segundo controller - sobrenome */}
              <Controller
                name="last_name"
                control={control}
                render={({ field }) => (
                  <MuiTextField placeholder="Last name" {...field} />
                )}
              />
            </Box>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <MuiTextField placeholder="Email" {...field} />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <MuiTextField
                  placeholder="Enter your password"
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton>{/* <EyeIcon /> */}</IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                  {...field}
                />
              )}
            />
            <DefaultButton
              variant="contained"
              sx={{
                height: 48,
                textTransform: "unset",
                backgroundColor: "#6E54B5",
              }}
              type="submit"
              // type="button"
            >
              <Typography>Create account</Typography>
            </DefaultButton>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
