import 'babel-polyfill'
import {combineReducers} from 'redux'

const todosReducer = (state = [], action) => {
  console.log('todos: state', state, 'action', action)
  switch (action.type) {
    case 'RESET':
      return []

    case 'ADD_TODO':
      const newTodo = {
        id: action.id,
        text: action.text,
        completed: false
      }
      return [...state, newTodo]

    case 'UPDATE_TODO':
      return state.map(todo => (todo.id === action.id) ? { ...todo, ...action.updates } : todo)

    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)

    default:
      return state
  }
}

const todoFilterReducer = (state = 'ALL', action) => {
  console.log('todoFilter: state', state, 'action', action)
  switch (action.type) {
    case 'RESET':
      return 'ALL'

    case 'SELECT_TODO_FILTER':
      return action.todoFilter

    default:
      return state
  }
}

const deleteButtonOnTodoReducer = (state = null, action) => {
  console.log('deleteButtonOnTodo: state', state, 'action', action)
  switch (action.type) {
    case 'RESET':
      return -1

    case 'SHOW_DELETE_BUTTON_ON_TODO':
      return action.todo

    default:
      return state
  }
}

export const todoReducer = combineReducers({
  todos: todosReducer,
  todoFilter: todoFilterReducer,
  deleteButtonOnTodo: deleteButtonOnTodoReducer
})
