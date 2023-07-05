import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { client } from "../../api/client";

const initialState = {
  posts: [
    {
      id: "1",
      title: "First Post!",
      content: "Hello!",
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
      title: "Second Post",
      content: "More text",
      date: sub(new Date(), { minutes: 5 }).toISOString(),
      reactions: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
    },
  ],
  status: "idle",
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    incrementByPost: (state, action) => {
      console.log("action", action);
      state.posts.push({
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
      const abcd = state.posts.find((post) => post.id === id);
      if (abcd) {
        abcd.title = title;
        abcd.content = content;
      }
    },
    reactionAdded(state, action) {
      console.log("action", action);
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  console.log("vao");
  const response = await client.get("/fakeApi/posts");
  console.log("response", response);

  return response.data;
});
export const selectAllPosts = (state) => state.posts.posts;

export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId);

export const { incrementByPost, postUpdate, reactionAdded,  } =
  postSlice.actions;
export default postSlice.reducer;
