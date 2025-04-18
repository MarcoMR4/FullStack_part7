import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { likeBlog } from '../reducers/blogsReducer'  

const BlogView = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const blog = useSelector(state =>
    state.blog.find(b => b.id === id)
  )

  if (!blog) {
    return null
  }

  const handleLike = () => {
    dispatch(likeBlog(blog.id))
  }

  return (
    <div>
      <h2>{blog.title} by {blog.author}</h2>
      <p>
        URL: <a href={blog.url} target="_blank" rel="noopener noreferrer">
               {blog.url}
             </a>
      </p>
      <p>
        Likes: {blog.likes}
        <button onClick={handleLike}>like</button>
      </p>
      <p>
        Added by:{" "}
        <Link to={`/users/${blog.userId}`}>
          {blog.user?.id || "Unknown"}
        </Link>
      </p>
    </div>
  )
}

export default BlogView
