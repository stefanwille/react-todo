import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from 'redux/rootReducer'

import Root from 'containers/Root'

function loggerMiddleware (store) {
  return (next) => (action) => {
    // console.log('before dispatch: state', store.getState(), 'action:', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('after dispatch: state', store.getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.    return returnValue
    return returnValue
  }
}

const store = createStore(rootReducer, undefined, applyMiddleware(loggerMiddleware))

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

render()
