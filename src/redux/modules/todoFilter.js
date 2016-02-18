const todoFilter = (state = 'ALL', action) => {
  console.log('todoFilter: state', state, 'action', action)
  switch (action.type) {
    case 'SELECT_TODO_FILTER':
      return action.todoFilter

    default:
      return state
  }
}

export default todoFilter
