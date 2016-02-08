import React, { PropTypes } from 'react'

import Todo from 'components/Todo/Todo'

class TodoList extends React.Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    onTodoCompleted: PropTypes.func.isRequired
  };

  render () {
    const todos = this.props.todos.map(todo => (
                                <Todo todo={todo} onCompleted={this.props.onTodoCompleted} key={todo.id} />
                            )
    )
    return (
      <table className='todo-list todo-table'>
        <tbody>
          { todos }
        </tbody>
      </table>
    )
  }
}

export default TodoList
