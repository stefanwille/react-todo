import 'babel-polyfill'
import {combineReducers} from 'redux'

import todos from 'redux/modules/todos'
import todoFilter from 'redux/modules/todoFilter'
import deleteButtonOnTodo from 'redux/modules/deleteButtonOnTodo'

const rootReducer = combineReducers({
  todos: todos,
  todoFilter: todoFilter,
  deleteButtonOnTodo: deleteButtonOnTodo
})

export default rootReducer
