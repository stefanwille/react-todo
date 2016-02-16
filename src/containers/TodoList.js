import {connect} from 'react-redux'

import TodoListPresentation from 'components/TodoListPresentation/TodoListPresentation'

const getVisibleTodos = (todos, todoFilter) => {
  const predicate = getTodoFilterPredicate(todoFilter)
  return todos.filter(predicate)
}

const getTodoFilterPredicate = (todoFilter) => {
  switch (todoFilter) {
    case 'ALL':
      return (v) => v
    case 'ACTIVE':
      return (v) => !v.completed
    case 'COMPLETED':
      return (v) => v.completed
    default:
      throw new Error('Unknown todoFilter' + todoFilter)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.todoFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoListPresentation)

export default TodoList
