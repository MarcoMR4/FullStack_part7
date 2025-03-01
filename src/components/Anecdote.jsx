// import { useParams } from "react-router-dom"

const Anecdote = ({anecdote}) => {
    // const id = useParams().id
    // const anecdote = anecdotes.find(a => a.id === Number(id)) 

    return(
        <div>
            <h3>{anecdote.content}</h3>
            Author: {anecdote.author}
            <br /><br />
            Info: <i>{anecdote.info}</i>
            <br /><br />
            Votes: {anecdote.votes}
            <br /><br /><br /><br /><br />
        </div>
    )
}

export default Anecdote