import React, { PropTypes } from 'react'

class Todo extends React.Component {
  static propTypes = {
    todo: PropTypes.any.isRequired,
    deleteButtonVisible: PropTypes.bool,
    onCompleted: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onDeleteButtonVisibilityChanged: PropTypes.func.isRequired
  };

  render () {
    const textStyle = this.props.todo.completed ? {'textDecoration': 'line-through'} : {}
    let deleteButtonClassName = 'delete-button btn btn-default'
    if (!this.props.deleteButtonVisible) {
      deleteButtonClassName += ' delete-button-hidden'
    }
    return (
      <tr className='todo'
            onMouseEnter={this.handleMouseEnter.bind(this)}
            onMouseLeave={this.handleMouseLeave.bind(this)}
        >
        <td>
          <input type='checkbox' checked={this.props.todo.completed ? 'checked' : ''} onChange={() => { this.props.onCompleted(this.props.todo) } } />
        </td>
        <td>
          <span style={textStyle}>
            {this.props.todo.text}
          </span>
        </td>
        <td>
          <a className={deleteButtonClassName} onClick={this.handleDelete.bind(this)}>X</a>
        </td>
      </tr>
    )
  }

  handleMouseEnter (event) {
    this.props.onDeleteButtonVisibilityChanged(this.props.todo)
  }

  handleMouseLeave (event) {
    this.props.onDeleteButtonVisibilityChanged(undefined)
  }

  handleDelete () {
    this.props.onDelete(this.props.todo)
  }
}

export default Todo
