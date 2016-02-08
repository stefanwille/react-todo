import 'babel-polyfill'

export const INITIAL_STATE = {
  todos: [],
  inputText: ''
}

export const reducer = (state = INITIAL_STATE, action) => {
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

    case 'UPDATE_INPUT_TEXT':
      return { ...state, inputText: action.inputText }

    default:
      return state
  }
}
