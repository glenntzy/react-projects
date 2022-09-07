import {useState, useEffect} from 'react';

const useFetch = (url) => {
const [data, setData] = useState(null);
const [isPending, setIsPending] = useState(true);

  
  useEffect(() => {
//abortcontroller for useEffect clean up
const abortController = new AbortController();
      setTimeout(() => {
        fetch(url, {signal: abortController.signal})
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
      })
      .catch(err => {
        if (err.name === 'AbortError'){
          console.log("fetch aborted")
        }
        else {
          setIsPending(false);
        
        }
      })
      }, 1000)
      return () => abortController.abort();
    }, [url]);
    
    return {data, isPending}
}

export default useFetch;