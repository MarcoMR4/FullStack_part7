import { useField } from "../hooks"
import blogs from "../services/blogs"
import { useDispatch, useSelector } from "react-redux"
import { addBlog } from "../reducers/blogsReducer"
import { useNavigate } from "react-router-dom"
import { sendNotification, hideNotification } from "../reducers/notificationReducer"


const NewBlog = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loggedUser = useSelector(state => state.auth.user)

    const content = useField('text')
    const author = useField('text')
    const url = useField('text')

    const { reset: resetContent, ...contentProps } = content
    const { reset: resetAuthor, ...authorProps } = author
    const { reset: resetUrl, ...urlProps } = url


    const handleSubmit = (e) => {
        e.preventDefault()
        const newBlog = {
            title: content.value,
            author: loggedUser.name,
            url: url.value,
            likes: 0,
            userId: loggedUser.id  
        }
        try {
            blogs.create(newBlog)
            .then(() => {
                dispatch(addBlog(newBlog))
                dispatch(sendNotification({ message:` New blog ${newBlog.title} by ${newBlog.author} added!` }));
                setTimeout(() => {
                    dispatch(hideNotification())
                }, 3000)
                
                navigate('/blogs', { replace: true })
            })
        } 
        catch (error) {
            console.error('Blog could not be added. ')
        }
    }

    const handleReset = () => {
        content.reset()
        author.reset()
        url.reset()
    }

    return (
        <div>
        <h2>create a new blog</h2>
        <form onSubmit={handleSubmit}>
            <div>
            title: 
            <input {...contentProps}  />
            </div>
            <div>
            author: 
            <input {...authorProps} />       
            </div>
            <div>
            url for more info: 
            <input {...urlProps} />
            </div>
            <button type="submit">create</button>
        </form>
        <button type='button' onClick={handleReset}>reset</button>
        </div>
    )
}

export default NewBlog