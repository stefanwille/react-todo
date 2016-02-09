import React, { PropTypes } from 'react'

import TodoWidget from 'containers/TodoWidget'

export class HomeView extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render () {
    return (
      <div className='row'>
        <h1>Todos App in React.js / Redux / ES6</h1>
        <TodoWidget store={this.props.store} />
      </div>
    )
  }
}

export default HomeView
