"use client";
import AddNewUser from "@/features/addNewUser/addNewUser";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import DisplayUsers from "@/features/displayUsers/displayUsers";

export default function Home() {
  const listOfUsers = useSelector((state: RootState) => state.data.users);
  return (
    <div>
      <AddNewUser />
      {listOfUsers.length > 0 && <DisplayUsers users={listOfUsers} />}
    </div>
  );
}
