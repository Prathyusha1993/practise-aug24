import React, { useEffect, useState } from 'react'

const TodoPlaceholder = () => {
    const [todos, setTodos] = useState([]);
    const [todosPerPage, setTodosPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const getTodos = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        console.log(data);
        setTodos(data);
    }

    useEffect(() => {
        getTodos();
    }, []);

    const numOfTotalPages = Math.ceil(todos.length / todosPerPage);
    console.log(numOfTotalPages);
    const pages = [...Array(numOfTotalPages+1).keys()].slice(1);
    console.log(pages);

    const indexOfLastTodo = currentPage * todosPerPage; // 1 * 10 = 10
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage; // 10 - 10 = 0

    const visibleTodos = todos.slice(indexOfFirstTodo,indexOfLastTodo);

    const handlePrev = () => {
        if(currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
        
    };

    const handleNext = () => {
        if(currentPage !== numOfTotalPages){
            setCurrentPage(currentPage + 1);
        }
    };

  return (
    <>
    <select onChange={(e) => setTodosPerPage(e.target.value)}>
        <option value='10'>10</option>
        <option value='30'>30</option>
        <option value='50'>50</option>
    </select>
    <div>
        {visibleTodos.map((todo) => (
            <p key={todo.id}>{todo.title}</p>
        ))}
        <span onClick={handlePrev}>Prev</span>
        <p style={{color:'purple'}}>{pages.map((page) => (
            <span key={page} onClick={() => setCurrentPage(page)}>{`${page} | `}</span>
        ))}</p>
         <span onClick={handleNext}>Next</span>
    </div>
    </>
    
  )
}

export default TodoPlaceholder;