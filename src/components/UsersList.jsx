import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeUsers } from '../reducers/userReducer'
import { Link } from 'react-router-dom'
import { startBlogs } from '../reducers/blogsReducer'
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material'

const UsersList = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)
  const blogs = useSelector((state) => state.blog)

  useEffect(() => {
    dispatch(initializeUsers())
    dispatch(startBlogs())
  }, [dispatch])

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Nombre</strong></TableCell>
              <TableCell><strong>Blogs creados</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => {
              const count = blogs.filter((b) => b.userId === user.id).length

              return (
                <TableRow key={user.id}>
                  <TableCell>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                  </TableCell>
                  <TableCell>{count}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default UsersList
