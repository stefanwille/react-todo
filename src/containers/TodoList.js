import {connect} from 'react-redux'

import TodoListPresentation from 'components/TodoListPresentation/TodoListPresentation'

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.todoFilter)
  }
}

const getVisibleTodos = (todos, todoFilter) => {
  switch (todoFilter) {
    case 'ALL':
      return todos

    case 'ACTIVE':
      return todos.filter(v => !v.completed)

    case 'COMPLETED':
      return todos.filter(v => v.completed)
  }
}

const TodoList = connect(mapStateToProps, null)(TodoListPresentation)

export default TodoList
