import { User } from "@/types/user";
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface DisplayUsersProps {
  users: User[];
}

export default function DisplayUsers({ users }: DisplayUsersProps) {
  return (
    <TableContainer className="mt-4 px-4">
      <Table>
        <TableHead>
          <TableRow className="bg-sky-800">
            <TableCell>Nombre</TableCell>
            <TableCell>Ultimo pago</TableCell>
            <TableCell>Dias restantes</TableCell>
            <TableCell>Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => {
            const registerDate = new Date(user.registerDate);
            const futureDate = new Date(registerDate);
            futureDate.setDate(futureDate.getDate() + user.daysBought);
            const today = new Date();
            const diffMs = futureDate.getTime() - today.getTime();
            const leftDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
            const options: Intl.DateTimeFormatOptions = {
              year: "numeric",
              month: "long",
              day: "numeric",
            };

            return (
              <TableRow key={index}>
                <TableCell>{user.name}</TableCell>
                <TableCell>
                  {registerDate.toLocaleDateString("es", options)}
                </TableCell>
                <TableCell>{leftDays}</TableCell>
                <TableCell>
                  <Chip
                    label={
                      leftDays > 0
                        ? "Activo"
                        : leftDays <= 0 && leftDays > -5
                        ? "En mora"
                        : "Inactivo"
                    }
                    color={
                      leftDays > 0
                        ? "success"
                        : leftDays <= 0 && leftDays > -5
                        ? "error"
                        : "default"
                    }
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
