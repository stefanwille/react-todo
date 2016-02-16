import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    itemsLeft: getItemsLeft(state)
  }
}

const getItemsLeft = (state) => {
  return state.todos.reduce((sum, todo) => todo.completed ? sum : sum + 1, 0)
}

const TodoItemsLeftPresentation = ({itemsLeft}) => (
  <div className='todo-items-left'>
    <label>{itemsLeft} items left</label>
  </div>
)

TodoItemsLeftPresentation.propTypes = {
  itemsLeft: PropTypes.number.isRequired
}

const TodoItemsLeft = connect(mapStateToProps)(TodoItemsLeftPresentation)
export default TodoItemsLeft
