import { createReducer } from '@reduxjs/toolkit';
import { listMovieTypes } from "./actions";

const initialListState:any = {
    data: [],
    pending: false,
    error: false,
  };
  export const listMovieTypeReducer = createReducer(initialListState, (builder) => {
    builder
      .addCase(listMovieTypes.pending, (state) => {
        state.pending = true;
      })
      .addCase(listMovieTypes.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(listMovieTypes.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  });
  
  
  export const movieType = {
    listMovieTypeReducer: listMovieTypeReducer,
  
  }
  