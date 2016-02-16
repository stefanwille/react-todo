import React from 'react'

import TodoForm from 'containers/TodoForm'
import TodoList from 'containers/TodoList'
import TodoItemsLeft from 'containers/TodoItemsLeft'
import TodoFilter from 'containers/TodoFilter'

const TodoWidget = () => {
  return (
    <div className='todo-widget'>
        <TodoForm />
        <TodoList />
        <TodoItemsLeft />
        <TodoFilter />
    </div>
  )
}

export default TodoWidget
