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

  describe('update input text', () => {
    it('modifies the text that will be used to add a todo', () => {
      const action = {type: 'UPDATE_INPUT_TEXT', inputText: 'hoohoo'}
      store.dispatch(action)
      const expectedState = 'hoohoo'
      assert.equal(expectedState, store.getState().inputText)
    })
  })
})
