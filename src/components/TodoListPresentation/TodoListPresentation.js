import React, { PropTypes } from 'react'

import Todo from 'containers/Todo'

const TodoListPresentation = ({todos}) => {
  return (
  <table className='todo-list todo-table'>
    <tbody>
      {
        todos.map(todo => (
                            <Todo todo={todo}
                                  key={todo.id}
                            />
                          )
        )
      }
    </tbody>
  </table>
  )
}

TodoListPresentation.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoListPresentation
