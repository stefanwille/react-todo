import React, { PropTypes } from 'react'

const TodoPresentation = ({
    todo,
    deleteButtonVisible,
    onCompleted,
    onDelete,
    onDeleteButtonVisibilityChanged
  }) => {
  console.log('render Todo', todo.text)
  const textStyle = todo.completed ? {'textDecoration': 'line-through'} : {}
  let deleteButtonClassName = 'delete-button close'
  if (!deleteButtonVisible) {
    deleteButtonClassName += ' delete-button-hidden'
  }
  return (
    <tr className='todo'
          onMouseOver={() => onDeleteButtonVisibilityChanged(todo.id)}
          onMouseLeave={() => onDeleteButtonVisibilityChanged(-1)}
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
        <button type='button' className={deleteButtonClassName} aria-label='Close' onClick={() => onDelete(todo)}>
          <span aria-hidden='true'>&times;</span>
        </button>
      </td>
    </tr>
  )
}

TodoPresentation.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteButtonVisible: PropTypes.bool.isRequired,
  onCompleted: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDeleteButtonVisibilityChanged: PropTypes.func.isRequired
}

export default TodoPresentation