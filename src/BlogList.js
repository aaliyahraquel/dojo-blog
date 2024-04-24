import { Link } from "react-router-dom";

const BlogList = ({ blogs, title}) => {

  return ( 
    <div className="blog-list">
      <h2> { title }</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={ blog.id }> 
          <Link to={`/blogs/${blog.id}`}>
          <h2>{ blog.title }</h2>
            <p> Written by: { blog.author }</p>
          </Link>
        </div>
      ))}
   </div>
  )
}
 
export default BlogList;

// key attribute allows the DOM to keep track of list items
// blogs data in db.json is captured using db.json
// `` template string - allows us to output variables 
// Link converted blogs into links with id attached to url