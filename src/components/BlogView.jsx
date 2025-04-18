import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { likeBlog } from '../reducers/blogsReducer'  
import blogs from '../services/blogs'

const BlogView = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState([])

  const blog = useSelector(state =>
    state.blog.find(b => b.id === id)
  )

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const fetchedComments = await blogs.getComments(blog.id)
        console.log(fetchedComments)
        setComments(fetchedComments)
      } catch (error) {
        console.error('Error fetching comments:', error)
      }
    }
    if (blog?.id) {
      fetchComments()
    }
  }, [blog?.id])
  

  if (!blog) {
    return null
  }

  const handleLike = () => {
    dispatch(likeBlog(blog.id))
  }

  const handleAddComment = async (e) => {
    e.preventDefault()
    try {
      const addedComment = await blogs.addComment(blog.id, newComment)
      setComments(comments.concat(addedComment))
      setNewComment('')  
    } 
    catch (error) {
      console.error('Error adding comment:', error)
    }
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
      <br />
      <h3>Comments</h3>
      <form onSubmit={handleAddComment}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          required
        />
        <button type="submit">Add comment</button>

        {comments.length === 0
          ? <p>No hay comentarios todavía.</p>
          : <ul>
              {comments.map(c => (
                <li key={c.id}>
                  {typeof c.content === 'string' ? c.content : 'Comentario no válido'}
                </li>
              ))}
            </ul>
        }

      </form>
    </div>
  )
}

export default BlogView
