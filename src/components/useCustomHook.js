import React, {useEffect, useState} from 'react'

const useCustomHook = (config={}) => {
    const[data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getFetchData = async () => {
        const response = await fetch(config.url);
        const data = await response.json();
        setData(data.slice(0,10));
        // console.log(data.slice(1,10));
    };

    useEffect(() => {
        getFetchData();
    }, []);

    return {data, loading};
};

export default useCustomHook;