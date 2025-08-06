"use client";
import AddNewUser from "@/features/addNewUser/addNewUser";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import DisplayUsers from "@/features/displayUsers/displayUsers";
import { useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import AuthGate from "./authGate";
import { Button } from "@mui/material";

export default function Home() {
  const listOfUsers = useSelector((state: RootState) => state.data.users);
  useEffect(() => {}, []);
  const onLogout = async () => {
    await supabase.auth.signOut();
  };
  return (
    <div>
      <Button onClick={onLogout}>Cerrar sesión</Button>
      <AddNewUser />
      <AuthGate />
      {listOfUsers.length > 0 && <DisplayUsers users={listOfUsers} />}
    </div>
  );
}
