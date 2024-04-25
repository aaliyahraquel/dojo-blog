import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';


const BlogDetails = () => {
  const { id } = useParams(); // allows us to grab route params from the url
  const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();
  
  const handleClick = (e) => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }

  return ( 
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{ error }</div>}
      {blog && ( // return template with parentheses
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}

    </div>
   );
}
 
export default BlogDetails;