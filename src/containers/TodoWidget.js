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
                    onDeleteButtonVisibilityChanged={this.handleDeleteButtonVisibilityChanged.bind(this)}
                    onCompleted={this.handleCompleted.bind(this)}
                    onDelete={this.handleDelete.bind(this)}
                    deleteButtonOnTodo={state.deleteButtonOnTodo}
            />
          <TodoItemsLeft itemsLeft={this.getItemsLeft()} />
          <TodoFilter itemsLeft={this.getItemsLeft()} selected={state.todoFilter} onChange={this.handleTodoFilterChanged.bind(this)} />
      </div>
    )
  }

  getFilteredTodos () {
    const state = this.reduxState
    const todos = state.todos
    const todoFilter = state.todoFilter
    let predicate
    switch (todoFilter) {
      case 'ALL':
        predicate = (v) => v
        break
      case 'ACTIVE':
        predicate = (v) => !v.completed
        break
      case 'COMPLETED':
        predicate = (v) => v.completed
        break
      default:
        throw new Error('Unknown todoFilter' + todoFilter)
    }
    return todos.filter(predicate)
  }

  getItemsLeft () {
    return this.getTodos().reduce((sum, todo) => todo.completed ? sum : sum + 1, 0)
  }

  getTodos () {
    const state = this.reduxState
    return state.todos
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
