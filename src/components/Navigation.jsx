import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../reducers/authReducer'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logoutUser())
    navigate('/login') 
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">My Application</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/blogs">Blogs</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/notes">Notes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/people">People</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/anecdotes">Anecdotes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/countries">Countries</Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            {user ? (
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={handleLogout}>Logout ({user.username})</button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
