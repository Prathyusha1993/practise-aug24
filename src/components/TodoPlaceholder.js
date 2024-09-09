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
  
    const numberOftotalPages = Math.ceil(todos.length / todosPerPage);
    const pages = [...Array(numberOftotalPages+1).keys()].slice(1);
    console.log(pages);

    const indexOflastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOflastTodo - todosPerPage;

    const visibleTodos = todos.slice(indexOfFirstTodo, indexOflastTodo);

    const hanldePrev = () => {
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1);
        }
    };

    const hanldeNext = () => {
        if(currentPage !== numberOftotalPages){
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
        <span onClick={hanldePrev}>Prev</span>
       <p style={{color: 'purple'}}>{pages.map((page) => (
            <span key={page} onClick={() =>setCurrentPage(page)}>{page}</span>
        ))}
        </p> 
        <span onClick={hanldeNext}>Next</span>
    </div>
    </>
    
  )
}

export default TodoPlaceholder;