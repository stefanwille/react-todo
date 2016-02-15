import React from 'react'

const Todo = ({todo, deleteButtonVisible, onCompleted, onDelete, onDeleteButtonVisibilityChanged}) => {
  const textStyle = todo.completed ? {'textDecoration': 'line-through'} : {}
  let deleteButtonClassName = 'delete-button close'
  if (!deleteButtonVisible) {
    deleteButtonClassName += ' delete-button-hidden'
  }
  return (
    <tr className='todo'
          onMouseEnter={onDeleteButtonVisibilityChanged.bind(this, todo)}
          onMouseLeave={onDeleteButtonVisibilityChanged.bind(this, undefined)}
      >
      <td>
        <input type='checkbox' checked={todo.completed ? 'checked' : ''} onChange={() => { onCompleted(todo) } } />
      </td>
      <td>
        <span style={textStyle}>
          {todo.text}
        </span>
      </td>
      <td>
        <button type='button' className={deleteButtonClassName} aria-label='Close' onClick={onDelete.bind(this, todo)}>
          <span aria-hidden='true'>&times;</span>
        </button>
      </td>
    </tr>
  )
}

export default Todo
