import { useResource } from "../hooks"
import { useField } from "../hooks"

const People = () => {
    const [people, peopleService] = useResource('http://localhost:3005/people')
    const nameFull = useField('text')
    const numberFull = useField('text')

    const { reset: resetName, ...name } = nameFull
    const { reset: resetNumber, ...number } = numberFull

    const handlePersonSubmit = (event) => {
        event.preventDefault()
        peopleService.create({ name: name.value, number: number.value })
         .then(
            (person) => {
                people.concat(person)
                resetName()
                resetNumber()
            }
         )
         .catch((error) => console.log(error))
    }

    return(
    <>
    <div>
        <h2>People list</h2>
        <form onSubmit={handlePersonSubmit}>
            <label htmlFor="name">Name: </label>
            <input {...name} />
            <br />
            <label htmlFor="number">Phone number:</label>
            <input {...number} />
            <button>Save contact</button>
        </form> 
        {people.map(p => <p key={p.id}>{p.name} : {p.number}</p>)}
    </div>

    </>
    )
}

export default People