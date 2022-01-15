import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      name: "Ronin",
      email: "Ronin_Hawlkeye@gmail.com",
      title: "Junior Programmer",
      status: "Active",
      role: "Administrator",
    },
    {
      id: 2,
      name: "Natasha",
      email: "NatashaRomanOff@gmail.com",
      title: "Senior Programmer",
      status: "Active",
      role: "Programmer",
    },
    {
      id: 3,
      name: "Ironman",
      email: "Ironman@gmail.com",
      title: "Junior Programmer",
      status: "Disable",
      role: "Business Analyst",
    },
    {
      id: 4,
      name: "Hulk",
      email: "Hulk@yahoo.com",
      title: "Junior Programmer",
      status: "Active",
      role: "Manager",
    },
  ],
  count: 4,
  UserPopup: false,
};

const userSlice = createSlice({
  name: "userActions",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log("payload ::", action.payload, typeof action.payload.id);

      const isExist = state.users.find((user) => {
        return Number(user.id) === Number(action.payload.id);
      });
      console.log("isExist ::", isExist);
      if (isExist) {
        state.users[action.payload.id - 1] = action.payload;
      } else {
        state.users.push(action.payload);
        state.count += 1;
      }
      state.UserPopup = true;
    },
    remove: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { add, remove } = userSlice.actions;

export default userSlice.reducer;
