import React from 'react'

import Container from 'containers/Container'
import TodoForm from 'components/TodoForm/TodoForm'
import TodoList from 'components/TodoList/TodoList'
import TodoItemsLeft from 'components/TodoItemsLeft/TodoItemsLeft'
import TodoFilter from 'components/TodoFilter/TodoFilter'

export class TodoWidget extends Container {
  static propTypes = {
  };

  render () {
    const state = this.reduxState
    return (
      <div className='todo-widget'>
          <TodoForm onAddTodo={text => this.handleAddTodo(text)} />
          <TodoList todos={this.getFilteredTodos()} />
          <TodoItemsLeft itemsLeft={this.getItemsLeft()} />
          <TodoFilter itemsLeft={this.getItemsLeft()}
                      selected={state.todoFilter}
                      onChange={todoFilter => this.handleTodoFilterChanged(todoFilter)} />
      </div>
    )
  }

  getFilteredTodos () {
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

  getItemsLeft () {
    return this.getTodos().reduce((sum, todo) => todo.completed ? sum : sum + 1, 0)
  }

  getTodos () {
    return this.reduxState.todos
  }

  handleAddTodo (text) {
    this.store.dispatch({type: 'ADD_TODO', text: text, completed: false, id: Date.now()})
  }

  handleTodoFilterChanged (todoFilter) {
    this.store.dispatch({type: 'SELECT_TODO_FILTER', todoFilter: todoFilter})
  }
}

export default TodoWidget
