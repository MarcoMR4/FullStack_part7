import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeUsers } from '../reducers/userReducer'
import { Link } from 'react-router-dom'
import { startBlogs } from '../reducers/blogsReducer'

const UsersList = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)
  const blogs = useSelector((state) => state.blog)

  useEffect(() => {
    dispatch(initializeUsers())
    dispatch(startBlogs())
  }, [dispatch])

  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Blogs creados</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const count = blogs.filter((b) => b.userId === user.id).length

            return (
              <tr key={user.id}>
                <td>
                  <Link to={`/users/${user.id}`}>{user.name}</Link>
                </td>
                <td>{count}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UsersList
