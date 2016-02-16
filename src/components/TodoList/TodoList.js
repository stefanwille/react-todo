import React, { PropTypes } from 'react'

import Todo from 'components/Todo/Todo'

const TodoList = ({todos}) => {
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

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList
