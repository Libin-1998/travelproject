import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  package: [],
  status: "idle",
};

const token = sessionStorage.getItem("token");

export const getPackage = createAsyncThunk("package/get", async () => {
  const data = await axios.get("http://localhost:1515/api/trip/viewdata", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const result = data.data.data;
  console.log(result);
  return result;

});

export const packageSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getPackage.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getPackage.fulfilled, (state, action) => {
        state.status = "idle";
        state.package = action.payload;
        console.log(action.payload);
      })
      .addCase(getPackage.rejected, (state, action) => {
        state.status = "error";
      });
  },
});


export default packageSlice.reducer;
