import assert from 'assert'
import { createStore } from 'redux'

import { todoReducer, INITIAL_STATE } from 'redux/modules/todoreducer'

let store = createStore(todoReducer)

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
    it('modifies the text', () => {
      const action = {type: 'UPDATE_TODO', id: 0, updates: { text: 'Cool' }}
      store.dispatch(action)
      const expectedState = [{id: 0, text: 'Cool', completed: false}]
      assert.deepEqual(expectedState, store.getState().todos)
    })

    it('modifies the completed flag', () => {
      const action = {type: 'UPDATE_TODO', id: 0, updates: { completed: true }}
      store.dispatch(action)
      const expectedState = [{id: 0, text: 'Cool', completed: true}]
      assert.deepEqual(expectedState, store.getState().todos)
    })
  })

  describe('select todo filter', () => {
    it('selects the todo filter', () => {
      const action = {type: 'SELECT_TODO_FILTER', todoFilter: 'COMPLETED'}
      store.dispatch(action)
      const expectedState = 'COMPLETED'
      assert.deepEqual(expectedState, store.getState().todoFilter)
    })
  })
})
