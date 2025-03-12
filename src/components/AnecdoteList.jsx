import { Link } from "react-router-dom"

const AnecdoteList = ({ anecdotes, vote }) => (
    <div>
      <h2>Anecdotes</h2>
      <Link style={{padding: 5}} to="/anecdotes_new">create anecdote</Link>
      <hr />
      <ul>
        {anecdotes.map(anecdote => 
            <li key={anecdote.id} > 
                {anecdote.content}
                <Link to={`/anecdotes/${anecdote.id}`}> See anecdote</Link>
                <br />
                <button onClick={() => vote(anecdote.id)}>Vote</button>
            </li>
            
        )}
      </ul>
    </div>
)

export default AnecdoteList