import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  register,
  logout,
  checkUser,
  updateUserInfo,
} from "./authActions";

export interface User {
  name: string;
  surname: string;
  email: string;
  user_id?: string;
}
export interface UserInfo {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface UserState {
  user: User;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  showUserModal: boolean;
}

const initialState: UserState = {
  user: {
    name: "",
    surname: "",
    email: "",
    user_id: "",
  },

  isAuthenticated: false,
  loading: false,
  error: null,
  showUserModal: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setShowUserModal: (state) => {
      state.showUserModal = !state.showUserModal;
    },
    closeUserModal: (state) => {
      state.showUserModal = false;
    },
  },
  extraReducers: (builder) => {
    builder
      //check
      .addCase(checkUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkUser.fulfilled, (state, { payload }) => {
        state.user = {
          name: payload.data.name,
          surname: payload.data.surname,
          email: payload.data.email,
          user_id: payload.data.user_id,
        };
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(checkUser.rejected, (state) => {
        state.loading = false;
        state.error = "Login failed";
      })
      //login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = {
          name: payload.data.name,
          surname: payload.data.surname,
          email: payload.data.email,
          user_id: payload.data.user_id,
        };

        state.loading = false;
        state.isAuthenticated = true;
        state.showUserModal = !state.showUserModal;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.error = "Login failed";
        state.showUserModal = !state.showUserModal;
      })

      //register
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
      })

      //update user info
      .addCase(updateUserInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserInfo.fulfilled, (state) => {
        state.loading = false;
        console.log("updated succesfully");
      })
      .addCase(updateUserInfo.rejected, (state) => {
        state.loading = false;
      })

      //logout
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = {
          name: "",
          surname: "",
          email: "",
          user_id: "",
        };
        state.loading = false;
        state.showUserModal = !state.showUserModal;
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setShowUserModal, closeUserModal } = authSlice.actions;
export default authSlice.reducer;
