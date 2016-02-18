import React, { PropTypes } from 'react'

const TodoPresentation = ({
    todo,
    deleteButtonVisible,
    onCompleted,
    onDelete,
    onDeleteButtonShown,
    onDeleteButtonHidden
  }) => {
  console.log('render todo', todo.text)

  const textStyle = todo.completed ? {'textDecoration': 'line-through'} : {}
  let deleteButtonClassName = 'delete-button close'
  if (!deleteButtonVisible) {
    deleteButtonClassName += ' delete-button-hidden'
  }
  return (
    <tr className='todo'
          onMouseOver={() => onDeleteButtonShown()}
          onMouseLeave={() => onDeleteButtonHidden()}
      >
      <td>
        <input type='checkbox' checked={todo.completed} onChange={event => onCompleted(event.target.checked) } />
      </td>
      <td>
        <span style={textStyle}>
          {todo.text}
        </span>
      </td>
      <td>
        <button type='button' className={deleteButtonClassName} onClick={() => onDelete() }>
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
  onDeleteButtonShown: PropTypes.func.isRequired,
  onDeleteButtonHidden: PropTypes.func.isRequired
}

export default TodoPresentation
