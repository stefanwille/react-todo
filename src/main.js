import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { todoReducer } from 'redux/modules/todoreducer'

import Root from 'containers/Root'

const store = createStore(todoReducer)
window.store = store

// Render the React application to the DOM
function render () {
  ReactDOM.render(
      <Provider store={store}>
        <Root/>
      </Provider>
    ,
    document.getElementById('root')
  )
}

store.subscribe(render)

const logState = () => {
  console.log('logState - current state after action:', store.getState())
}
store.subscribe(logState)

render()
