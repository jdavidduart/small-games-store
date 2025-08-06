import Modal from "@mui/material/Modal";
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
        className="bg-gray-800 p-6 rounded-lg w-80 h-fit mx-auto my-20"
      >
        <Box>
          <AddUserForm onAddUser={onAddUser} />
        </Box>
      </Modal>
      {/* Example image usage */}
      <div className="flex align-middle justify-between p-2">
        <Image
          src="/logo.png" // public/images/user-avatar.png
          alt="User Avatar"
          width={80}
          height={80}
        />
        <Button onClick={handleOpen} variant="outlined" size="small">
          Agregar usuario
        </Button>
      </div>
    </div>
  );
}
