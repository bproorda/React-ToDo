import { useState, useEffect } from 'react';

export default function useFetch(url){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
  
    useEffect(() => {
      async function doFirstFetch() {
        setLoading(true);
        let response = await fetch(url);
        let json = await response.json();
        setData(json);
        setLoading(false);
        //console.log(json);
      }
  
      doFirstFetch();
      
    }, [url]);

    async function refresh() {
      setLoading(true);
      let response = await fetch(url);
      let json = await response.json();
      setData(json);
      setLoading(false);
    }
    return [
        isLoading,
        data,
        refresh,
      ];
}