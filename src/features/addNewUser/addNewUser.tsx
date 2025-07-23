import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddUserForm from "./components/addUserForm";
import { useAddNewUser } from "./hooks";
import { Button } from "@mui/material";
import Image from "next/image";

export default function AddNewUser() {
  const { handleClose, handleOpen, open, onAddUser } = useAddNewUser();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        className="bg-gray-500 p-6 rounded-lg w-80 h-fit mx-auto my-20"
      >
        <Box>
          <AddUserForm onAddUser={onAddUser} />
        </Box>
      </Modal>
      {/* Example image usage */}
      <Image
        src="/logo.png" // public/images/user-avatar.png
        alt="User Avatar"
        width={80}
        height={80}
      />
      <Button onClick={handleOpen} variant="outlined">
        Agregar usuario
      </Button>
    </div>
  );
}
