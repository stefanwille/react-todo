import React, { PropTypes } from 'react'

class TodoItemsLeft extends React.Component {
  static propTypes = {
    itemsLeft: PropTypes.number.isRequired
  };

  render () {
    return (
      <div className='todo-items-left'>
        <label>{this.props.itemsLeft} items left</label>
      </div>
    )
  }
}

export default TodoItemsLeft
