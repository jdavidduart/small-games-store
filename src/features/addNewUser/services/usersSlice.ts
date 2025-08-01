import { User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  users: [] as User[],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    sortByStatus: (state) => {
      const order = {};
      /*       const newOrder = [...state.users].sort((a,b)=>{
        if()
      }) */
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
