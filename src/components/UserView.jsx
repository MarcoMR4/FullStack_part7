import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const UserView = () => {
  const { id } = useParams()

  const user = useSelector(state =>
    state.users.find(u => u.id === id)
  )

  const userBlogs = useSelector(state =>
    state.blog.filter(blog => blog.userId === id)
  )

  if (!user) {
    return null
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>Blogs creados ({userBlogs.length})</h3>
      {userBlogs.length === 0
        ? <p>This user hasn't created any blogs yet.</p>
        : <ul>
            {userBlogs.map(blog => (
              <li key={blog.id}>
                {blog.title}
              </li>
            ))}
          </ul>
      }
    </div>
  )
}

export default UserView
