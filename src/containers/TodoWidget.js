import React from 'react'

import TodoForm from 'components/TodoForm/TodoForm'
import TodoList from 'components/TodoList/TodoList'
import TodoItemsLeft from 'components/TodoItemsLeft/TodoItemsLeft'
import TodoFilter from 'components/TodoFilter/TodoFilter'

export class TodoWidget extends React.Component {
  static propTypes = {
  };

  static contextTypes = {
    store: React.PropTypes.object
  };

  get reduxState () {
    return this.store.getState()
  }

  get store () {
    return this.context.store
  }

  render () {
    const state = this.reduxState
    return (
      <div className='todo-widget'>
          <TodoForm onAddTodo={this.handleAddTodo.bind(this)} />
          <TodoList todos={this.getFilteredTodos()}
                    deleteButtonOnTodo={state.deleteButtonOnTodo}
                    onDeleteButtonVisibilityChanged={this.handleDeleteButtonVisibilityChanged.bind(this)}
                    onCompleted={this.handleCompleted.bind(this)}
                    onDelete={this.handleDelete.bind(this)} />
          <TodoItemsLeft itemsLeft={this.getItemsLeft()} />
          <TodoFilter itemsLeft={this.getItemsLeft()}
                      selected={state.todoFilter}
                      onChange={this.handleTodoFilterChanged.bind(this)} />
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

  handleCompleted (todo) {
    this.store.dispatch({type: 'UPDATE_TODO', id: todo.id, updates: {completed: !todo.completed}})
  }

  handleDelete (todo) {
    this.store.dispatch({type: 'DELETE_TODO', id: todo.id})
  }

  handleTodoFilterChanged (todoFilter) {
    this.store.dispatch({type: 'SELECT_TODO_FILTER', todoFilter: todoFilter})
  }

  handleDeleteButtonVisibilityChanged (todo) {
    this.store.dispatch({type: 'SHOW_DELETE_BUTTON_ON_TODO', todo: todo ? todo.id : -1})
  }
}

export default TodoWidget
