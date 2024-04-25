import { useState } from "react";

const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents form from submitting and refreshing
    const blog = {title, body, author}; // set the new blog to the new object with the properties
    
    setIsLoading(true); // true because before the fetch request, when the form has been submitted

    fetch('http://localhost:8000/blogs', { // adds new object to db.json and make post request to blogs page
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, // content type being sent
      body: JSON.stringify(blog) // change object to string. pass in object
    }).then(() => { //action when the fetch request has been resolved
      console.log('new blog added');
      setIsLoading(false)
    })
  }
  return ( 
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
        type="text" 
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isLoading && <button>Add blog!</button>}
        {isLoading && <button disabled>Adding blog...</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
   );
}
 
export default Create;