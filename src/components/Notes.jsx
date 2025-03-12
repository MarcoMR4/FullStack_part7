import { useResource } from "../hooks"
import { useField } from "../hooks"
import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"

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
        <Table striped>
      <tbody>
        {notes.map(note =>
          <tr key={note.id}>
            <td>
              <Link to={`/notes/${note.id}`}>
                {note.content}
              </Link>
            </td>
            <td>
              {note.important}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
    </div>

    </>
    )
}

export default Notes 