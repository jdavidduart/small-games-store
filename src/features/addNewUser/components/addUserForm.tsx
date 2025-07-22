import { FormControl, FormLabel, Input, Box, FormGroup } from "@mui/material";

export default function AddUserForm() {
  return (
    <FormControl>
      <FormGroup>
        <Box mb={2}>
          <FormLabel htmlFor="nombre" sx={{ display: "block", mb: 1 }}>
            Nombre
          </FormLabel>
          <Input id="nombre" placeholder="Digitar nombre" fullWidth />
        </Box>
        <Box mb={2}></Box>
      </FormGroup>
    </FormControl>
  );
}
