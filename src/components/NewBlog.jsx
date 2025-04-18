import { useField } from "../hooks";
import blogs from "../services/blogs";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../reducers/blogsReducer";
import { useNavigate } from "react-router-dom";
import { sendNotification, hideNotification } from "../reducers/notificationReducer";

const NewBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.auth.user);

  const content = useField("text");
  const author = useField("text");
  const url = useField("text");

  const { reset: resetContent, ...contentProps } = content;
  const { reset: resetAuthor, ...authorProps } = author;
  const { reset: resetUrl, ...urlProps } = url;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      title: content.value,
      author: loggedUser.name,
      url: url.value,
      likes: 0,
      userId: loggedUser.id,
    };

    try {
      blogs.create(newBlog).then(() => {
        dispatch(addBlog(newBlog));
        dispatch(sendNotification({ message: `New blog ${newBlog.title} by ${newBlog.author} added!` }));
        setTimeout(() => {
          dispatch(hideNotification());
        }, 3000);
        navigate("/blogs", { replace: true });
      });
    } catch (error) {
      console.error("Blog could not be added.");
    }
  };

  const handleReset = () => {
    resetContent();
    resetAuthor();
    resetUrl();
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Create a New Blog</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input className="form-control" {...contentProps} placeholder="Enter blog title" />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input className="form-control" {...authorProps} placeholder="Enter your name" />
        </div>

        <div className="mb-3">
          <label className="form-label">URL for more info</label>
          <input className="form-control" {...urlProps} placeholder="Enter blog URL" />
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-success">
            Create
          </button>
          <button type="button" onClick={handleReset} className="btn btn-secondary">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBlog;
