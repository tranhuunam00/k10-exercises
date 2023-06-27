import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Khuong",
  },
  {
    id: "2",
    name: "Bao",
  },
  {
    id: "3",
    name: "Thanh",
  },
];

const postSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // incrementByPost: (state, action) => {
    //     state.push(action.payload)
    //   },
  },
});
export const { incrementByPost } = postSlice.actions;
export default postSlice.reducer;
