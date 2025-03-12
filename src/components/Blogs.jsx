import { useSelector, useDispatch } from "react-redux";
import { showBlogs } from "../reducers/blogsReducer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import blogService from "../services/blogs";

const Blogs = () => {
    const dispatch = useDispatch()
    const blogs = useSelector(state => state.blog.blogs)

    useEffect(() => {
        const fetchBlogs = async () => {
          try {
            blogService.getAll().then((data) => {
                dispatch(showBlogs(data));
            })
          } 
          catch (error) {
            console.error("Error fetching blogs:", error);
          }
        };
        fetchBlogs();
      }, [dispatch]);

   
    return (
        <div className="mt-2">
            <h2>Blogs</h2>
            <Link to='/newBlog'>Create new blog</Link>
            <ul>
                {blogs.map((blog, index) => (
                    <li key={index}>{blog.title} by {blog.author}</li>
                ))}
            </ul>
        </div>
    )
}

export default Blogs