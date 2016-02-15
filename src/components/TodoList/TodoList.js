import React, { PropTypes } from 'react'

import Todo from 'components/Todo/Todo'

const TodoList = ({todos, onCompleted, onDelete, onDeleteButtonVisibilityChanged, deleteButtonOnTodo}) => {
  console.log('todos...', todos)

  return (
  <table className='todo-list todo-table'>
    <tbody>
      {
        todos.map(todo => (
                            <Todo todo={todo}
                                  onCompleted={onCompleted}
                                  onDelete={onDelete}
                                  key={todo.id}
                                  onDeleteButtonVisibilityChanged={onDeleteButtonVisibilityChanged}
                                  deleteButtonVisible={todo.id === deleteButtonOnTodo}
                            />
                        )
        )
      }
    </tbody>
  </table>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onCompleted: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDeleteButtonVisibilityChanged: PropTypes.func.isRequired,
  deleteButtonOnTodo: PropTypes.number.isRequired
}

export default TodoList
