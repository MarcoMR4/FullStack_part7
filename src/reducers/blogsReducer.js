import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: 'blogs', 
    initialState: {
        blogs: []
    }, 
    reducers: {
        showBlogs: (state, action) => {
            state.blogs = action.payload
        },
        addBlog: (state, action) => {
            state.blogs.push(action.payload)
        }
    }

})

export const {showBlogs, addBlog} = blogSlice.actions
export default blogSlice.reducer