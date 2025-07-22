"use client";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useRef, useState } from "react";
import AddNewUser from "@/features/addNewUser/addNewUser";

export default function Home() {
  return (
    <div>
      <AddNewUser />
    </div>
  );
}
