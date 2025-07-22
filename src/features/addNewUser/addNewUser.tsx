import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddUserForm from "./components/addUserForm";

export default function AddNewUser() {
  return (
    <div>
      <Modal
        open={true}
        //onClose={}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <AddUserForm />
        </Box>
      </Modal>
    </div>
  );
}
