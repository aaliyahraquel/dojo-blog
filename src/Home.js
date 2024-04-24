import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs'); // can use array or object destructuring. Object allows for any property to be used at a time
// data: blogs is otherwise known as/ same as
  return ( 
    <div className="home">
      {error && <div> { error } </div>}
      {isLoading && <div>Loading...</div>}
      {blogs && < BlogList blogs={ blogs }  title= 'All Blogs'/>} 
    </div>
   )
}
 
export default Home;

// parent component
// useEffect takes a callback function upon every render of a component, eg fetching data
// dependency array prevents function being run on every rendered
// Best place to fetch data is in the useEffect hook, so it is loaded on the first render of the page
// conditional template = if left of && is true, the condition on the right is ouput. This makes sure the Bloglist output
// is only there when the data has been fetched. (It initally takes some time because its a promise)