import React from 'react'

import Container from 'containers/Container'

import {addTodo, selectTodoFilter} from 'actions/actions'

import TodoForm from 'components/TodoForm/TodoForm'
import TodoList from 'containers/TodoList'
import TodoItemsLeft from 'components/TodoItemsLeft/TodoItemsLeft'
import TodoFilter from 'components/TodoFilter/TodoFilter'

export class TodoWidget extends Container {
  render () {
    const state = this.reduxState
    return (
      <div className='todo-widget'>
          <TodoForm onAddTodo={text => this.store.dispatch(addTodo(text))} />
          <TodoList />
          <TodoItemsLeft itemsLeft={this.getItemsLeft()} />
          <TodoFilter itemsLeft={this.getItemsLeft()}
                      selected={state.todoFilter}
                      onChange={todoFilter => this.store.dispatch(selectTodoFilter(todoFilter))} />
      </div>
    )
  }

  getItemsLeft () {
    return this.getTodos().reduce((sum, todo) => todo.completed ? sum : sum + 1, 0)
  }

  getTodos () {
    return this.reduxState.todos
  }
}

export default TodoWidget
