import { Link } from "react-router-dom";

const Blog = ({ blog, onLike, onRemove }) => {
  return (
    <div className="card mt-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/blogs/${blog.id}`} className="text-decoration-none text-dark">
            {blog.title}
          </Link>
        </h5>
        <p className="card-text mb-1"><strong>Autor:</strong> {blog.author}</p>
        <p className="card-text"><strong>Likes:</strong> {blog.likes}</p>

        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary btn-sm" onClick={onLike}>
            👍 Like
          </button>
          <button className="btn btn-outline-danger btn-sm" onClick={onRemove}>
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
