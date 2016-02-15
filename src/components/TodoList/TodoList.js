import React from 'react'

import Todo from 'components/Todo/Todo'

const TodoList = ({todos, onCompleted, onDelete, onDeleteButtonVisibilityChanged, deleteButtonOnTodo}) => {
  const todosComponents = this.props.todos.map(todo => (
                              <Todo todo={todo}
                                    onCompleted={this.props.onCompleted}
                                    onDelete={this.props.onDelete}
                                    key={todo.id}
                                    onDeleteButtonVisibilityChanged={this.props.onDeleteButtonVisibilityChanged}
                                    deleteButtonVisible={todo.id === this.props.deleteButtonOnTodo}
                              />
                          )
  )
  return (
    <table className='todo-list todo-table'>
      <tbody>
        { todosComponents }
      </tbody>
    </table>
  )
}

export default TodoList
