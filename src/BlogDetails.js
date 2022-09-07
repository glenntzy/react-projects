import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
import './index.css';
const BlogDetails = () => {
  const {id} = useParams();
  const {data: blog, isPending} = useFetch('http://localhost:8000/blogs/'+ id);
  return (
    <div className="blog-details">
    {isPending && <div>Loading...</div>}
  { blog && (
    <article>
    <h2>{blog.title}</h2>
    <p>Created By: {blog.author}</p>
    <div>{blog.body}</div>
    </article>
    )}
    </div>
    );
};

export default BlogDetails;

