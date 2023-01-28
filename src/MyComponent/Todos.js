import React from 'react'
import { TodoItem } from '../MyComponent/TodoItem';

export const Todos = (props) => {
  let myStyle = {
    minHeight: "80vh",
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h3 className='text-center m-3'>ToDos List</h3>
      {props.todos.length === 0 ? "No Todo's to display!" :
        props.todos.map((todo) => {
          return (
            <>
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
              <hr/>
              </>
          )
        })
      }
    </div>
  )
}