import { configureStore } from '@reduxjs/toolkit'
import notificationSlice from './src/reducers/notificationReducer'
import blogSlice from './src/reducers/blogsReducer'

const store = configureStore({
    reducer: {
      notification: notificationSlice, 
      blog: blogSlice
    },
})

export default store