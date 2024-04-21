import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlog] = useState(null); // set to null because data is now returned from json server

  useEffect(() => {
    fetch('http://localhost:8000/blogs') // promise
    .then(res => {
      return res.json(); // async promise
    })
    .then(data => { // promise
      console.log(data);
      setBlog(data);
    })
  }, []); // an empty dependency array only allows the useEffect hook to render on the first initial render, ONLY
  // when there's a value in the array, the page renders upon the cnage of state of that value

  return ( 
    <div className="home">
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