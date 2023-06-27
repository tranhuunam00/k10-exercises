import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "First Post!",
    content: "Hello",
  },
  {
    id: "2",
    title: "Hello Khuong",
    content: "Khuong ne'",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    incrementByPost: (state, action) => {
      console.log("qqq",action);
      state.push(action.payload);
    },
    postUpdate(state, action) {
      const { id, title, content } = action.payload;
      const abcd = state.find((post) => post.id === id);
      if (abcd) {
        abcd.title = title;
        abcd.content = content;
      }
    },
  },
});
export const { incrementByPost, postUpdate } = postSlice.actions;
export default postSlice.reducer;
