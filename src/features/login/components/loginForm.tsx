import { UserLogin } from "@/types/user";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

interface LoginFormProps {
  onLogin: (data: UserLogin) => void;
  errorOfLogin: string | null;
}

export default function LoginForm({ onLogin, errorOfLogin }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserLogin>();
  const onSubmit: SubmitHandler<UserLogin> = (data) => {
    onLogin(data);
  };
  return (
    <div className="w-full overflow-y-auto max-h-screen  min-h-screen">
      <Box px={5} py={6}>
        <Box mb={4}>
          <Typography variant="h5" component="h5" align="center">
            Bienvenido
          </Typography>
          <Typography variant="body1" component="p" align="center">
            Ingresa a tu cuenta
          </Typography>
          {errorOfLogin && (
            <Alert severity="error" className="my-4">
              {errorOfLogin}
            </Alert>
          )}
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth error={!!errors.email}>
            <Box width="100%">
              <TextField
                label="Correo"
                size="small"
                id="email"
                fullWidth
                placeholder="Digitar usuario"
                error={!!errors.email}
                {...register("email", {
                  required: "Campo requerido",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // regex para email
                    message: "Formato de correo inválido",
                  },
                })}
              />
              {errors.email && (
                <FormHelperText>{errors.email.message}</FormHelperText>
              )}
            </Box>
          </FormControl>
          <FormControl fullWidth error={!!errors.password}>
            <Box width="100%" mt={3}>
              <TextField
                size="small"
                id="password"
                fullWidth
                placeholder="Digitar clave"
                label="Contraseña"
                {...register("password", { required: true })}
                error={!!errors.password}
              />
            </Box>
            {errors.password && (
              <FormHelperText>Campo requerido</FormHelperText>
            )}
          </FormControl>
          <Button type="submit" variant="outlined" sx={{ mt: 4 }} fullWidth>
            INGRESAR
          </Button>
        </form>
      </Box>
    </div>
  );
}
