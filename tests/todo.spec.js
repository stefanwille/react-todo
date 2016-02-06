import 'babel-polyfill'

import assert from 'assert'

import { createStore } from 'redux'

const INITIAL_STATE = {
  todos: []
}

const reducer = (state = INITIAL_STATE, action) => {
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

    default:
      return state
  }
}

let store = createStore(reducer)

const logState = () => {
  console.log('logState - current state after action:', store.getState())
}

store.subscribe(logState)

describe('todos reducer', () => {
  before(() => {
    store.dispatch({type: 'RESET'})
  })

  describe('initial state', () => {
    it('is an empty array of todos', () => {
      assert.deepEqual(INITIAL_STATE, store.getState())
    })
  })

  describe('add todo', () => {
    it('adds a todo', () => {
      const action = {type: 'ADD_TODO', id: 0, text: 'Hello', completed: false}
      store.dispatch(action)
      const expectedState = [{id: 0, text: 'Hello', completed: false}]
      assert.deepEqual(expectedState, store.getState().todos)
    })
  })

  describe('update todo', () => {
    it('modifieds a todo', () => {
      const action = {type: 'UPDATE_TODO', id: 0, updates: { text: 'Cool' }}
      store.dispatch(action)
      const expectedState = [{id: 0, text: 'Cool', completed: false}]
      assert.deepEqual(expectedState, store.getState().todos)
    })
  })
})
