import { createReducer } from '@reduxjs/toolkit';
import { listMovie } from "./actions";

const initialListState:any = {
    data: [],
    pending: false,
    error: false,
  };
  export const listMovieReducer = createReducer(initialListState, (builder) => {
    builder
      .addCase(listMovie.pending, (state) => {
        state.pending = true;
      })
      .addCase(listMovie.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(listMovie.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  });
  
  
  export const movies = {
    listMovieReducer: listMovieReducer,
  
  }
  