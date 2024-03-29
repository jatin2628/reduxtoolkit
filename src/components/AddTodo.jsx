import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const dispatch = useDispatch();

    const [input,setInput] = useState('');

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <>
    <form onSubmit={addTodoHandler}>
        <input type='text'
            value={input}
            placeholder='Add Todo.....'
            onChange = {(e)=>setInput(e.target.value)}
        />
        <button type='submit'>Add</button>
     </form>
    </>
  )
}

export default AddTodo;