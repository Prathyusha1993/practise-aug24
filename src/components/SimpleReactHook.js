import React, { useState } from 'react'
import useCustomHook from './useCustomHook';
import MoveWithCursor from './MoveWithCursor';

const SimpleReactHook = () => {
    const [search, setsearch] = useState('');
    const {data, loading} = useCustomHook({url: 'https://jsonplaceholder.typicode.com/posts'});

    if(!loading){
        return <div>Loading</div>
    }
  return (
    <div>
        <input type='text' value={search} onChange={(e) => setsearch(e.target.value)} />
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
        <MoveWithCursor />
    </div>
  )
}

export default SimpleReactHook;