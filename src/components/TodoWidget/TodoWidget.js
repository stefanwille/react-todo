import React, { PropTypes } from 'react'

import TodoForm from 'components/TodoForm/TodoForm'
import TodoList from 'components/TodoList/TodoList'
import TodoFilter from 'components/TodoFilter/TodoFilter'

export class TodoWidget extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render () {
    console.log('supplying todoFilter', this.props.store.getState().todoFilter)
    return (
      <div className='todo-widget'>
          <TodoForm onAddTodo={this.handleAddTodo.bind(this)} />
          <TodoList todos={this.props.store.getState().todos} onTodoCompleted={this.handleTodoCompleted.bind(this)} />
          <TodoFilter todos={this.props.store.getState().todos} todoFilter={this.props.store.getState().todoFilter} onChange={this.handleTodoFilterChanged.bind(this)} />
      </div>
    )
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
