const deleteButtonOnTodo = (state = null, action) => {
  console.log('deleteButtonOnTodo: state', state, 'action', action)
  switch (action.type) {
    case 'SHOW_DELETE_BUTTON_ON_TODO':
      return action.todo

    default:
      return state
  }
}

export default deleteButtonOnTodo
