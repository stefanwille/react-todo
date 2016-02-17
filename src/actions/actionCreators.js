
export function addTodo (text) {
  return {type: 'ADD_TODO', text: text, completed: false, id: Date.now()}
}

export function updateTodo (todo, updates) {
  return {type: 'UPDATE_TODO', id: todo.id, updates: updates}
}

export function deleteTodo (todo) {
  return {type: 'DELETE_TODO', id: todo.id}
}

export function selectTodoFilter (todoFilter) {
  return {type: 'SELECT_TODO_FILTER', todoFilter: todoFilter}
}

export function showDeleteButtonOnTodo (id) {
  return {type: 'SHOW_DELETE_BUTTON_ON_TODO', todo: id}
}

