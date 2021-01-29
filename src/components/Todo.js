import React from 'react';

const Todo = (props) => {
  return <div className="todo">
    <div className={ !props.todo.complete ? `todo-task` : `todo-task complete` }>{ props.todo.task }</div>
    <div className="btn-container">
      <button onClick={() => props.completeTodo(props.todo.id)}>{ !props.todo.complete ? `complete` : `undo` }</button>
      <button onClick={() => props.deleteTodo(props.todo.id)}>X</button>
    </div>
  </div>
}


//! complete prop is true or false

export default Todo;