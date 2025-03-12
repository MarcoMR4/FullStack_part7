import { createSlice, current } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification', 
    initialState: {
      message: '', 
      showNotification: false,
      errorNotification: false
    },
    reducers: {
        sendNotification: (state, action) => {
          state.message = action.payload, 
          state.showNotification = true, 
          state.errorNotification = false
        }, 
        sendErrorNotification: (state, action) => {
          state.message = action.payload, 
          state.showNotification = true, 
          state.errorNotification = true
        }, 
        hideNotification: (state) => {
          state.message = '',
          state.showNotification = false
        } 
      }
})

export const {sendNotification, hideNotification} = notificationSlice.actions
export default notificationSlice.reducer