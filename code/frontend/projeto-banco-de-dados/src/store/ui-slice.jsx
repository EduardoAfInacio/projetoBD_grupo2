import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loginIsVisible: false,
    notification: null,
  },
  reducers: {
    toggle(state) {
      state.loginIsVisible = !state.loginIsVisible;
    },
    showNotifications(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
