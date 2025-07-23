import { User } from "@/types/user";
import {
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
    <TableContainer className="mt-4 px-2">
      <Table>
        <TableHead>
          <TableRow className="bg-sky-800">
            <TableCell>Nombre</TableCell>
            <TableCell>Fecha de ingreso</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.registerDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
