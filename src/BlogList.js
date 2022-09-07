import {Link} from 'react-router-dom'
import './index.css'
const BlogList = ({blogs, title}) => {
  return (
  <div className="blog-list">
{blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>
        <h2>{blog.title}</h2>
        </Link>
        <p>Created By: {blog.author}</p>
        
        </div>
      ))}
    </div>
    );
}

export default BlogList;