"use client";
import AddNewUser from "@/features/addNewUser/addNewUser";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export default function Home() {
  const listOfUsers = useSelector((state: RootState) => state.data.users);
  return (
    <div>
      <AddNewUser />
      {listOfUsers.map((user) => (
        <div key={user.name}>
          <p>Name: {user.name}</p>
          <p>Register Date: {user.registerDate}</p>
        </div>
      ))}
    </div>
  );
}
