import React, { useEffect,useState } from 'react'

const FetchDisplay = () => {
    const [fetchedData, setFetchedData] = useState([]);

    const fetchData = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        
        setFetchedData(data.slice(0,10));
        console.log(data);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <ul>
      {fetchedData.map((item) => (
        <li key={item.id}>
            {item.title} - {item.body}
        </li>
      ))}
    </ul>
  )
}

export default FetchDisplay;