import React from 'react'

import Container from 'containers/Container'

import {selectTodoFilter} from 'actions/actions'

import TodoForm from 'containers/TodoForm'
import TodoList from 'containers/TodoList'
import TodoItemsLeft from 'containers/TodoItemsLeft'
import TodoFilter from 'components/TodoFilter/TodoFilter'

export class TodoWidget extends Container {
  render () {
    return (
      <div className='todo-widget'>
          <TodoForm />
          <TodoList />
          <TodoItemsLeft />
          <TodoFilter selected={this.getTodoFilter()}
                      onChange={todoFilter => this.store.dispatch(selectTodoFilter(todoFilter))} />
      </div>
    )
  }

  getTodos () {
    return this.reduxState.todos
  }

  getTodoFilter () {
    return this.reduxState.todoFilter
  }
}

export default TodoWidget
