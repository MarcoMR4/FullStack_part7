import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import blogService from "../services/blogs";
import Blog from "./Blog";
import { startBlogs, likeBlog, removeBlog } from "../reducers/blogsReducer";
import { sendNotification, hideNotification } from "../reducers/notificationReducer";

const Blogs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await blogService.getAll();
        dispatch(startBlogs(data));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, [dispatch]);

  const blogs = useSelector((state) => state.blog);

  const handleLike = async (blog) => {
    try {
      const updatedBlog = { ...blog, likes: blog.likes + 1 };
      await blogService.update(blog.id, updatedBlog);
      dispatch(likeBlog({ id: blog.id }));
      dispatch(sendNotification({ message: `You liked '${blog.title}'` }));
      setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);
    } catch (error) {
      console.error("Error liking blog:", error);
    }
  };

  const handleRemove = async (blog) => {
    if (window.confirm(`Do you want to delete "${blog.title}"?`)) {
      try {
        await blogService.deleteBlog(blog.id);
        dispatch(removeBlog({ id: blog.id }));
        dispatch(sendNotification({ message: `'${blog.title}' deleted` }));
        setTimeout(() => {
          dispatch(hideNotification());
        }, 3000);
      } catch (error) {
        console.error("Error removing blog:", error);
      }
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Blogs</h2>
        <Link to="/newBlog" className="btn btn-success">
          Create new blog
        </Link>
      </div>

      {blogs.length === 0 ? (
        <div className="alert alert-info">No any available blogs.</div>
      ) : (
        <div className="row">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-md-6 mb-3">
              <Blog blog={blog} onLike={() => handleLike(blog)} onRemove={() => handleRemove(blog)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
