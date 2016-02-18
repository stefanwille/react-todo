import 'babel-polyfill'
import {combineReducers} from 'redux'

import todos from './todos'
import todoFilter from './todoFilter'
import deleteButtonOnTodo from './deleteButtonOnTodo'

export const todoReducer = combineReducers({
  todos: todos,
  todoFilter: todoFilter,
  deleteButtonOnTodo: deleteButtonOnTodo
})

