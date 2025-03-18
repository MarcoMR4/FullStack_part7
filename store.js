import { configureStore } from '@reduxjs/toolkit'
import notificationSlice from './src/reducers/notificationReducer'
import blogSlice from './src/reducers/blogsReducer'
import authSlice from './src/reducers/authReducer'

const store = configureStore({
    reducer: {
      notification: notificationSlice, 
      blog: blogSlice, 
      auth: authSlice
    },
})

export default store