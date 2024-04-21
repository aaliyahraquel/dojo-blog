import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlog] = useState([
     { title: 'My new website', body: 'lorem ipsum...', author: 'Cilla', id: 1 },
     { title: 'Fitness tips', body: 'lorem ipsum...', author: 'Aaliyah', id: 2 },
     { title: 'Tech girly', body: 'lorem ipsum...', author: 'Claude', id: 3 },
  ]);

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setBlog(newBlogs);
  }

  useEffect(() => {
    console.log(name)
  }, [name]); // an empty dependency array only allows the useEffect hook to render on the first initial render, ONLY

  return ( 
    <div className="home">
      < BlogList blogs={ blogs }  title= 'All Blogs' handleDelete={ handleDelete }/>
      <button onClick={ () => setName('luigi') }>Change name</button>
      <p>{name}</p>
    </div>
   )
}
 
export default Home;

// parent component
// useEffect takes a callback function upon every render of a component, eg fetching data
// dependency array prevents function being run on every rendered