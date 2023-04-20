import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/app/axios";

export const listMovieTypes = createAsyncThunk(
    "movie-type/list",  async () => {
      try {
        const url = "/movieType";
        const response = await axiosInstance.get(url, {})
  
        if(response?.data) {
          console.log('action', response.data)
          return response?.data
        }
      } catch (error) {
        console.log("error register:", error);
      }
    }
  );
  
  