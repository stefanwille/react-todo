import React, { PropTypes } from 'react'

const TodoItemsLeft = ({itemsLeft}) => (
  <div className='todo-items-left'>
    <label>{itemsLeft} items left</label>
  </div>
)

TodoItemsLeft.propTypes = {
  itemsLeft: PropTypes.number.isRequired
}

export default TodoItemsLeft
