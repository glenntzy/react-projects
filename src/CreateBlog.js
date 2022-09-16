import {useState} from 'react';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};
    
fetch('http://localhost:8000/blogs/', {
method: 'POST',
headers: {"Content-Type" : "application/json"}, 
body: JSON.stringify(blog)
    })
    .then(() => {
      alert("New Blog Added");
    })
  }
  return (
    <div className="create">
    <h2>Add New Blog</h2>
    <form onSubmit = {handleSubmit}>
    <label>Blog Title: </label>
    <input
    type="text"
    required
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    />
    <label>Blog Content</label>
    <textarea
    required
    value = {body}
    onChange = {(e) => setBody(e.target.value)}
    ></textarea>
    <label>Author Name: </label>
    <input
    type = "text"
    value = {author}
    onChange = {(e) => setAuthor(e.target.value)}
    />
    <button>Add Blog</button>
    </form>

    </div>
    )
}

export default CreateBlog;