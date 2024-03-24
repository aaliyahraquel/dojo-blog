const Home = () => {

  const handleClick = (e) => {
    console.log('hello')
  }

  const handleClickAgain = (name,e) => {
    console.log('hello' + name, e.target)
  }

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={(e) => {
        handleClickAgain('mario', e) // creates an anonymous function which only gets invoked onClick
      }}>Click me again</button>
    </div>
   );
}
 
export default Home;