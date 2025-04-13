import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: 'blogs', 
    initialState: [], 
    reducers: {
        startBlogs: (state, action) => {
            return action.payload
        },  
        showBlogs: (state, action) => {
            return state
        },
        addBlog: (state, action) => {
            state.push(action.payload)
        },
        likeBlog: (state, action) => {
            const blog = state.find(blog => blog.id === action.payload.id)
            if (blog) {
                blog.likes += 1
            }
        },
        removeBlog: (state, action) => {
            state = state.filter(blog => blog.id !== action.payload.id)
        }
    }

})

export const {showBlogs, addBlog, likeBlog, removeBlog, startBlogs} = blogSlice.actions
export default blogSlice.reducer