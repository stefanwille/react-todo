import assert from 'assert'
import { createStore } from 'redux'

import { todoReducer } from 'redux/modules/todoreducer'

let store

describe('todos reducer', () => {
  before(() => {
    store = createStore(todoReducer)
  })

  describe('initial state', () => {
    it('is an empty array of todos', () => {
      assert.deepEqual([], store.getState().todos)
    })
  })

  describe('add todo', () => {
    it('adds a todo', () => {
      const action = {type: 'ADD_TODO', id: 0, text: 'Hello'}
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

  describe('delete todo', () => {
    it('removes a todo', () => {
      const addAction = {type: 'DELETE_TODO', id: 0, text: 'Hello'}
      store.dispatch(addAction)
      const deleteAction = {type: 'DELETE_TODO', id: 0}
      store.dispatch(deleteAction)
      const expectedState = []
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

  describe('update which todo item has a delete button', () => {
    it('selects the todo filter', () => {
      const actionShow = {type: 'SHOW_DELETE_BUTTON_ON_TODO', todo: 1}
      store.dispatch(actionShow)
      const expectedState = 1
      assert.deepEqual(expectedState, store.getState().deleteButtonOnTodo)
    })
  })
})
