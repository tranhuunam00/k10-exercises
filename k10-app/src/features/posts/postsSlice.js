import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "First Post!",
    content: "Hello",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
  {
    id: "2",
    title: "Hello Khuong",
    content: "Khuong ne'",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    incrementByPost: (state, action) => {
      console.log("action", action);
      state.push({
        ...action.payload,
        date: new Date().toISOString(),
        reactions: {
          thumbsUp: 0,
          hooray: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        },
      });
    },
    postUpdate(state, action) {
      const { id, title, content } = action.payload;
      const abcd = state.find((post) => post.id === id);
      if (abcd) {
        abcd.title = title;
        abcd.content = content;
      }
    },
    reactionAdded(state, action) {
      console.log("action", action);
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});
export const { incrementByPost, postUpdate, reactionAdded } = postSlice.actions;
export default postSlice.reducer;
