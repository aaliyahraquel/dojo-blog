import { Link } from 'react-router-dom'; // allows react to handle routing in the browser and intercept pages. quicker than sending request to the server

const Navbar = () => { // a component is a function which renders some JSX
  return (  
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;