const BlogList = ({ blogs, title}) => {

  return ( 
    <div className="blog-list">
      <h2> { title }</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={ blog.id }> 
          <h1>{ blog.title }</h1>
          <h2> { blog.body }</h2>
          <p> Written by: { blog.author }</p>
        </div>
      ))}
   </div>
  )
}
 
export default BlogList;

// key attribute allows the DOM to keep track of list items
// blogs data in db.json is captured using db.json