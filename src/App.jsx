import { useState } from 'react'
import {
  Routes, Route, Link, useNavigate, useMatch
} from 'react-router-dom'
import Footer from './components/Footer'
import AnecdoteList from './components/AnecdoteList'
import NewAnecdote from './components/NewAncdote'
import About from './components/About'
import Anecdote from './components/Anecdote'
import Notification from './components/Notification'

const Home = () => (
  <div> <h2>TKTL notes app</h2> </div>
)

const Notes = () => (
  <div> <h2>Notes</h2> </div>
)

const Users = () => (
  <div> <h2>Users</h2> </div>
)

const App = () => {

  const navigate = useNavigate()
  
  const padding = {
    padding: 5
  }

  const username = 'root'

  const [showNotif, setShowNotif] = useState(false)
  const [messageNotification, setMessageNotification] = useState('')


  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    setMessageNotification(`Anecdote ${anecdote.content} added!`)
    setShowNotif(true)
    setTimeout(() => {
      setMessageNotification('')
      setShowNotif(false)
    }, 3000)

    navigate('/anecdotes', { replace: true })
  }


  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  const match = useMatch('/anecdotes/:id')
  const anecdote = match 
    ? anecdotes.find(a => a.id === Number(match.params.id))
    : null

  return (
    <>
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/anecdotes">anecdotes</Link>
        <Link style={padding} to="/anecdotes_new">create anecdote</Link>
        <Link style={padding} to="/notes">notes</Link>
        <Link style={padding} to="/users">users</Link>
        <Link style={padding} to="/about">about</Link>
        {username
          ? <em>{username} logged in</em>
          : <Link style={padding} to="/login">login</Link>
        }
      </div>

      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} />
        <Route path="/anecdotes" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path="/anecdotes_new" element={<NewAnecdote addNew ={addNew} />} />
        {/* <Route path="/anecdotes/:id" element={<Anecdote anecdotes={anecdotes} />} /> */}
        <Route path="/anecdotes/:id" element={<Anecdote anecdote={anecdote} />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {
        showNotif && <Notification message = {messageNotification} />
      }

      <div>
        <i>Note app, Department of Computer Science 2024</i>
        <Footer />
      </div>
    </>
  )
}

export default App
