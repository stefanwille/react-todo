import React from 'react'

import Todo from 'components/Todo/Todo'

const TodoList = ({todos, onCompleted, onDelete, onDeleteButtonVisibilityChanged, deleteButtonOnTodo}) => (
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

export default TodoList
