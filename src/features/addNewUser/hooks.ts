import { User } from "@/types/user";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const useAddNewUser = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const onAddUser = (user: User) => {
    const date = new Date(user.registerDate);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    dispatch({
      type: "users/addUser",
      payload: {
        name: user.name,
        registerDate: date.toLocaleDateString("es", options),
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
