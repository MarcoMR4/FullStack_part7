import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logoutUser } from '../reducers/authReducer'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
  const user = useSelector(state => state.auth.user)
  const padding = { padding: 5 }
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logoutUser())
    navigate('/login') 
  }

  return (
    <div style={{ backgroundColor: '#eee', padding: 10, marginBottom: 20 }}>
      <Link style={padding} to="/">Home</Link>
      {user && <>
        <Link style={padding} to="/blogs">Blogs</Link>
        <Link style={padding} to="/notes">Notes</Link>
        <Link style={padding} to="/people">People</Link>
        <Link style={padding} to="/anecdotes">Anecdotes</Link>
        <Link style={padding} to="/users">Users</Link>
        <Link style={padding} to="/countries">Countries</Link>
      </>}
      <Link style={padding} to="/about">About</Link>
      {user
        ? <button onClick={handleLogout}>Logout ({user.username})</button>
        : <Link style={padding} to="/login">Login</Link>
      }
    </div>
  )
}

export default Navigation
