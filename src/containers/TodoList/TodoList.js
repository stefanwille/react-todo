import React from 'react'

import Container from 'containers/Container'

import TodoListPresentation from 'components/TodoListPresentation/TodoListPresentation'

class TodoList extends Container {
  static propTypes = {
  };

  render () {
    return (
      <TodoListPresentation todos={this.getVisibleTodos()} />
    )
  }

  getVisibleTodos () {
    const todos = this.getTodos()
    const predicate = this.getTodoFilterPredicate()
    return todos.filter(predicate)
  }

  getTodoFilterPredicate () {
    switch (this.reduxState.todoFilter) {
      case 'ALL':
        return (v) => v
      case 'ACTIVE':
        return (v) => !v.completed
      case 'COMPLETED':
        return (v) => v.completed
      default:
        throw new Error('Unknown todoFilter' + this.reduxState.todoFilter)
    }
  }

  getTodos () {
    return this.reduxState.todos
  }
}

export default TodoList
