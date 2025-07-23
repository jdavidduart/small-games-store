import {
  FormControl,
  FormLabel,
  Input,
  Box,
  FormHelperText,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Button } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { User } from "@/types/user";

interface AddUserFormProps {
  onAddUser: (data: User) => void;
}
export default function AddUserForm({ onAddUser }: AddUserFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<User>();
  const onSubmit: SubmitHandler<User> = (data) => onAddUser(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth error={!!errors.name}>
        <Box mb={2} width="100%">
          <FormLabel
            htmlFor="nombre"
            sx={{ display: "block", mb: 1 }}
            error={!!errors.name}
          >
            Nombre
          </FormLabel>
          <Input
            autoComplete="off"
            id="nombre"
            placeholder="Digitar nombre"
            fullWidth
            {...register("name", { required: true })}
          />
          {errors.name && <FormHelperText>Campo requerido</FormHelperText>}
        </Box>
      </FormControl>
      <FormControl fullWidth error={!!errors.registerDate}>
        <Box width="100%">
          <Controller
            name="registerDate"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <DatePicker
                label="Fecha de ingreso"
                className="w-full"
                onChange={(date) => field.onChange(date)}
                slotProps={{
                  textField: {
                    fullWidth: true,
                  },
                }}
              />
            )}
          />
          {errors.registerDate && (
            <FormHelperText>Campo requerido</FormHelperText>
          )}
        </Box>
        <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
          Guardar
        </Button>
      </FormControl>
    </form>
  );
}
