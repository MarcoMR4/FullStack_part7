import { configureStore } from '@reduxjs/toolkit'
import notificationSlice from './src/reducers/notificationReducer'

const store = configureStore({
    reducer: {
      notification: notificationSlice
    },
})

export default store