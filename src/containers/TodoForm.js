import {connect} from 'react-redux'

import {addTodo} from 'actions/actionCreators'
import TodoFormPresentation from 'components/TodoFormPresentation/TodoFormPresentation'

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (text) => {
      if (text !== '') {
        dispatch(addTodo(text))
      }
    }
  }
}

const TodoForm = connect(undefined, mapDispatchToProps)(TodoFormPresentation)

export default TodoForm
