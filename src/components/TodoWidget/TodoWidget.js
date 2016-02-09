import React, { PropTypes } from 'react'

import TodoForm from 'components/TodoForm/TodoForm'
import TodoList from 'components/TodoList/TodoList'
import TodoItemsLeft from 'components/TodoItemsLeft/TodoItemsLeft'
import TodoFilter from 'components/TodoFilter/TodoFilter'

export class TodoWidget extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render () {
    return (
      <div className='todo-widget'>
          <TodoForm onAddTodo={this.handleAddTodo.bind(this)} />
          <TodoList todos={this.getFilteredTodos()} onTodoCompleted={this.handleTodoCompleted.bind(this)} />
          <TodoItemsLeft itemsLeft={this.getItemsLeft()} />
          <TodoFilter todos={this.getTodos()} itemsLeft={this.getItemsLeft()} todoFilter={this.props.store.getState().todoFilter} onChange={this.handleTodoFilterChanged.bind(this)} />
      </div>
    )
  }

  getFilteredTodos () {
    const todos = this.props.store.getState().todos
    const todoFilter = this.props.store.getState().todoFilter
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
    return this.props.store.getState().todos
  }

  handleAddTodo (text) {
    this.props.store.dispatch({type: 'ADD_TODO', text: text, completed: false, id: Date.now()})
  }

  handleTodoCompleted (todo) {
    console.log('handleCompleted', todo)
    this.props.store.dispatch({type: 'UPDATE_TODO', id: todo.id, updates: {completed: !todo.completed}})
  }

  handleTodoFilterChanged (todoFilter) {
    console.log('handleTodoFilterChanged', todoFilter)
    this.props.store.dispatch({type: 'SELECT_TODO_FILTER', todoFilter: todoFilter})
  }
}

export default TodoWidget
