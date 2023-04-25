import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/app/axios";

export const listMovie = createAsyncThunk(
    "movie/list",  async () => {
      try {
        const url = "/movie";
        const response = await axiosInstance.get(url, {})
  
        if(response?.data) {
          return response?.data
        }
      } catch (error) { /* empty */ }
    }
  );
  
  