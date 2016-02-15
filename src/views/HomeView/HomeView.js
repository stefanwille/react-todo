import React from 'react'

import TodoWidget from 'containers/TodoWidget'

export class HomeView extends React.Component {
  static propTypes = {
  };

  render () {
    return (
      <div className='row'>
        <h1>Todo App in React.js / Redux / ES6</h1>
        <TodoWidget />
      </div>
    )
  }
}

export default HomeView
