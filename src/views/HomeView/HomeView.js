import React, { PropTypes } from 'react'

import TodoWidget from 'containers/TodoWidget'

export class HomeView extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render () {
    return (
      <div className='row'>
        <h1>Todo App in React.js and Redux</h1>
        <TodoWidget store={this.props.store} />
      </div>
    )
  }
}

export default HomeView
