import { useEffect, useState } from "react";

const useFetch = (url) => { // 'use' needs to be used when creating a custom hook
  
  const [data, setData] = useState(null); // set to null because data is now returned from json server
  const [isLoading, setIsLoading] = useState(true); //to let user know if the fetch is taking a while
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => { // simulate a real fetch request - conditional loading message
      fetch(url) // promise
        .then(res => {
          if(!res.ok) { //check response object
            throw Error('could not fetch data for that resorce'); //throw error for any other type of error except 5xx
          }
          return res.json(); // async promise
        })
        .then(data => { // promise
          setData(data);
          setIsLoading(false) //once the data has loaded, it is no longer loading
          setError(null);
        })
        .catch(err => {
          setIsLoading(false)
          setError(err.message) //catch any network error
        })
    }, 1000)
  }, [url]); // an empty dependency array only allows the useEffect hook to render on the first initial render, ONLY
  // when there's a value in the array, the page renders upon the change of state of that value

  return { data, isLoading, error }; // return values from hooks
}

export default useFetch;