import { User } from "@/types/user";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const useAddNewUser = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const onAddUser = (user: User) => {
    dispatch({
      type: "users/addUser",
      payload: {
        name: user.name,
        registerDate: `${user.registerDate}`,
      },
    });
  };
  return {
    open,
    handleOpen,
    handleClose,
    onAddUser,
  };
};
