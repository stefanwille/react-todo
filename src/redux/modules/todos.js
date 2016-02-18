const todos = (state = [], action) => {
  console.log('todos: state', state, 'action', action)
  switch (action.type) {
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

export default todos
