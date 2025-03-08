const Anecdote = ({anecdote}) => {

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