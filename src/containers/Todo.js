import { PropTypes } from 'react'
import {connect} from 'react-redux'

import {updateTodo, deleteTodo, showDeleteButtonOnTodo} from 'actions/actionCreators'
import TodoPresentation from 'components/TodoPresentation/TodoPresentation'

const mapStateToProps = (state, {todo}) => {
  return {
    deleteButtonVisible: state.deleteButtonOnTodo === todo.id
  }
}

const mapDispatchToProps = (dispatch, {todo}) => {
  return {
    onCompleted () {
      dispatch(updateTodo(todo, {completed: !todo.completed}))
    },

    onDelete () {
      dispatch(deleteTodo(todo))
    },

    onDeleteButtonShown () {
      dispatch(showDeleteButtonOnTodo(todo.id))
    },

    onDeleteButtonHidden () {
      dispatch(showDeleteButtonOnTodo(null))
    }
  }
}

const Todo = connect(mapStateToProps, mapDispatchToProps)(TodoPresentation)

Todo.propTypes = {
  todo: PropTypes.object.isRequired
}

export default Todo
