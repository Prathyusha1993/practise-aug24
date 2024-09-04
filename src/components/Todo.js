import React, {useState} from 'react'

const Todo = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [edit, setEdit] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if(!input.trim()) return;
        setTodos([...todos, input]);
        setInput('');
    };

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((todo,i) => i !== index);
        setTodos(newTodos);
    };

    const startEditing = (index) => {
        setEditIndex(index);
        setEdit(todos[index]);
    };

    const handleEditTodo = (e, index) => {
        e.preventDefault();
       if(!edit.trim()) return;
       const newTodos = todos.map((todo, i ) => i === index ? edit : todo);
       setTodos(newTodos);
       handleCancelTodo();
    };

    const handleCancelTodo = () => {
        setEditIndex(null);
        setEdit('');
    }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit'>Send</button>
      </form>
      <ul>
        {todos.map((todo,index) => (
            <li key={index}>
                {editIndex === index ? (
                    <form onSubmit={(e) => handleEditTodo(e, index)}>
                        <input type='text' value={edit} onChange={(e) => setEdit(e.target.value)} />
                        <button type='submit'>Save</button>
                        <button onClick={handleCancelTodo}>Cancel</button>
                    </form>
                ) : (
                    <>
                    {todo}
                    <button onClick={() => startEditing(index)}>Edit</button>
                    <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                    </>
                )
                }
                
            </li>
        ))}
      </ul>
    </div>
  )
};

export default Todo;