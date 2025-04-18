import { Link } from "react-router-dom"

const Blog = ({ blog, onLike, onRemove }) => {
  return (
    <div className="card mt-2 p-2 border">
      <h4>
        <Link to={`/blogs/${blog.id}`} style={{ textDecoration: "none" }}>
          {blog.title}
        </Link>
      </h4>
      <p><strong>Author:</strong> {blog.author}</p>
      <p><strong>Likes:</strong> {blog.likes}</p>
      <button onClick={onLike}>Like</button>
      <button
        onClick={onRemove}
        style={{ marginLeft: "10px", color: "red" }}
      >
        Delete
      </button>
    </div>
  )
}

export default Blog
