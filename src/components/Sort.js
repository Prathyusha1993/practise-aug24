import React from 'react';

const users = [
    {name: 'Alice', age: 25},
    {name: 'Alice', age: 25},
    {name: 'Alice', age: 25},
]

const Sort = (users) => {
  return (
    users.sort((a,b) => a.age -b.age)
  )
}

export default Sort