import { useResource } from "../hooks"
import { useField } from "../hooks"

const Notes = () => {
    const [notes, noteService] = useResource('http://localhost:3005/notes')
    const contentFull = useField('text')

    const {reset, ...content} = contentFull

    const handleNoteSubmit = (event) => {
        event.preventDefault()
        noteService.create({ content: content.value })
         .then(
            (note) => {
                notes.concat(note)
                contentFull.reset()
            }
         )
         .catch((error) => console.log(error))
    }

    return(
    <>
    <div>
        <h2>notes</h2>
        <form onSubmit={handleNoteSubmit}>
            <input {...content} />
            <button>create</button>
        </form> 
        {notes.map(n => <p key={n.id}>{n.content}</p>)}
    </div>

    </>
    )
}

export default Notes 