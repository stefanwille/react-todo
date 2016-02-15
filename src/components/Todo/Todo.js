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
    let deleteButtonClassName = 'delete-button close'
    if (!this.props.deleteButtonVisible) {
      deleteButtonClassName += ' delete-button-hidden'
    }
    return (
      <tr className='todo'
            onMouseEnter={this.props.onDeleteButtonVisibilityChanged.bind(this, this.props.todo)}
            onMouseLeave={this.props.onDeleteButtonVisibilityChanged.bind(this, undefined)}
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
          <button type='button' className={deleteButtonClassName} aria-label='Close' onClick={this.props.onDelete.bind(this, this.props.todo)}>
            <span aria-hidden='true'>&times;</span>
          </button>
        </td>
      </tr>
    )
  }
}

export default Todo
