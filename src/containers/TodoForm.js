import {connect} from 'react-redux'

import {addTodo} from 'actions/actions'
import TodoFormPresentation from 'components/TodoFormPresentation/TodoFormPresentation'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (text) => (text !== '') ? dispatch(addTodo(text)) : ''
  }
}

const TodoForm = connect(mapStateToProps, mapDispatchToProps)(TodoFormPresentation)

export default TodoForm
