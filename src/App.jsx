import {
  Routes, Route, Link
} from 'react-router-dom'
import Footer from './components/Footer'
import AnecdoteList from './components/AnecdoteList'
import NewAnecdote from './components/NewAncdote'
import About from './components/About'
import Anecdote from './components/Anecdote'
import Notification from './components/Notification'
import Countries from './components/Countries'
import Notes from './components/Notes'
import People from './components/People'
import Blogs from './components/Blogs'
import NewBlog from './components/newBlog'
import { useState } from 'react'
import { useNavigate, useMatch} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { sendNotification, hideNotification } from './reducers/notificationReducer'

const Home = () => (
  <div> <h2>TKTL notes app</h2> </div>
)

const Users = () => (
  <div> <h2>Users</h2> </div>
)

const App = () => {

  const showNotif = useSelector((state) => state.notification.showNotification)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const padding = {
    padding: 5
  }

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
    dispatch(sendNotification({ message:` New anecdote ${anecdote.content} by ${anecdote.author} added!` }));
    setTimeout(() => {
      dispatch(hideNotification())
    }, 3000)

    navigate('/anecdotes', { replace: true })
  }

  const match = useMatch('/anecdotes/:id')
  const anecdote = match 
  ? anecdotes.find(a => a.id === Number(match.params.id))
  : null

  
  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)
    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
    dispatch(sendNotification({ message:` Voted for ${anecdote.content} by ${anecdote.author}!` }));
    setTimeout(() => {
      dispatch(hideNotification())
    }, 3000)
  }

  const username = 'root'

  return (
    <>
      <div className='container'>
        <Link style={padding} to="/">home</Link> 
        <Link style={padding} to="/blogs">blogs</Link>
        <Link style={padding} to="/anecdotes">anecdotes</Link>
        {/* <Link style={padding} to="/anecdotes_new">create anecdote</Link> */}
        <Link style={padding} to="/notes">notes</Link>
        <Link style={padding} to="/people">people</Link>
        <Link style={padding} to="/users">users</Link>
        <Link style={padding} to="/countries">countries</Link>
        <Link style={padding} to="/about">about</Link>
        {username
          ? <em>{username} logged in</em>
          : <Link style={padding} to="/login">login</Link>
        }

          <Routes>
                  <Route path="/notes" element={<Notes />} />
                  <Route path="/people" element={<People />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/anecdotes" element={<AnecdoteList anecdotes={anecdotes} vote={vote} />} />
                  <Route path="/anecdotes_new" element={<NewAnecdote addNew ={addNew} />} />
                  {/* <Route path="/anecdotes/:id" element={<Anecdote anecdotes={anecdotes} />} /> */}
                  <Route path="/anecdotes/:id" element={<Anecdote anecdote={anecdote} />} />
                  <Route path="/countries" element={<Countries />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/newBlog" element={<NewBlog />} />
                  <Route path="/about" element={<About />} />
                </Routes>

                {
                  showNotif && <Notification/>
                }

                <div>
                  <i>Note app, Department of Computer Science 2024</i>
                  <Footer />
                </div>
      </div>
    </>
  )
}

export default App
