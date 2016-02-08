import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'

import { reducer } from 'redux/modules/todo'

import Root from 'containers/Root'

let store = createStore(reducer)

// Render the React application to the DOM
function render () {
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  )
}

store.subscribe(render)

const logState = () => {
  console.log('logState - current state after action:', store.getState())
}
store.subscribe(logState)

render()
