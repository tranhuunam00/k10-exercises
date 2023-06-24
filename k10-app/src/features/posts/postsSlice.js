import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "First Post!",
    content: "Hello",
  },
  {
    id: "2",
    title: "First Post!",
    content: "Hello",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    incrementByPost: (state, action) => {
        state.push(action.payload)
      },
  },
  
});
export const { incrementByPost } = postSlice.actions;
export default postSlice.reducer;
