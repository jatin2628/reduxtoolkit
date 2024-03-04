import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
    const dispatch = useDispatch();
    const todos = useSelector((state)=>state.todos)

    const removeEvent = (e,id) => {
        e.preventDefault();
        dispatch(removeTodo(id))
    }
  return (
    <>
        {
            todos.map((todo)=>(
                <li key={todo.id}>
                    {todo.text} BJH
                    <button onClick={(e)=>removeEvent(e,todo.id)}>X</button>
                </li>
            ))
        }
    </>
  )
}

export default Todos