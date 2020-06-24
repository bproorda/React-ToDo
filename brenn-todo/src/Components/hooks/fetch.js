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

    const refresh = () => {
      reload(url);
    };

    async function reload() {
      let response = await fetch(url);
      let json = await response.json();
      setData(json);
    };

    return [
        isLoading,
        data,
        refresh,
      ];
}