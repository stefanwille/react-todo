import 'babel-polyfill'

export const INITIAL_STATE = {
  todos: [],
  todoFilter: 'ALL'
}

export const todoReducer = (state = INITIAL_STATE, action) => {
  console.log('reducer: state', state, 'action', action)
  switch (action.type) {
    case 'RESET':
      return INITIAL_STATE

    case 'ADD_TODO':
      const newTodo = {
        id: action.id,
        text: action.text,
        completed: action.completed
      }
      const extendedTodos = [...state.todos, newTodo]
      return { ...state, todos: extendedTodos }

    case 'UPDATE_TODO':
      const updatedTodos = state.todos.map(todo => (todo.id === action.id) ? { ...todo, ...action.updates } : todo)
      return { ...state, todos: updatedTodos }

    case 'SELECT_TODO_FILTER':
      return { ...state, todoFilter: action.todoFilter }

    default:
      return state
  }
}
