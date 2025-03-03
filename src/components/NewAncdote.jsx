import { useState } from "react"
import { useField } from "../hooks"

const NewAnecdote = ({addNew}) => {

  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

  const { reset: resetContent, ...contentProps } = content
  const { reset: resetAuthor, ...authorProps } = author
  const { reset: resetInfo, ...infoProps } = info


  const handleSubmit = (e) => {
    e.preventDefault()
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
  }

  const handleReset = () => {
    content.reset()
    author.reset()
    info.reset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...contentProps}  />
        </div>
        <div>
          author
          <input {...authorProps} />       
        </div>
        <div>
          url for more info
          <input {...infoProps} />
          </div>
        <button type="submit">create</button>
      </form>
      <button type='button' onClick={handleReset}>reset</button>
    </div>
  )

}

export default NewAnecdote