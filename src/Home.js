import useFetch from './useFetch';
import BlogList from './BlogList';

const Home = () => {
  const {data: blogs, isPending} = useFetch('http://localhost:8000/blogs')
  
  return (
    <div className="home">
       {isPending && <div>Loading...</div>}
       {blogs && <BlogList blogs={blogs}/>}
    </div>
    );
}

export default Home;