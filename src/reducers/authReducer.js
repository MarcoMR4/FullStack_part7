import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null, 
    loading: false,
    error: null
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  }
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;

const baseUrl = 'http://localhost:3005/users'

export const loginUser = (username, password) => async (dispatch) => {
    dispatch(loginStart());
    try {
      const { data }  = await axios.get(`${baseUrl}/?username=${username}&password=${password}`);
      if (data.length > 0) {
        dispatch(loginSuccess(data[0])); 
        localStorage.setItem("user", JSON.stringify(data[0])); 
      } 
      else {
        throw new Error("Credenciales incorrectas");
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
};
  

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem("user");
    dispatch(logout());
};


