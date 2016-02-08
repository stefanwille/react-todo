import React, { PropTypes } from 'react'

class Todo extends React.Component {
  static propTypes = {
    todo: PropTypes.any.isRequired,
    onCompleted: PropTypes.func.isRequired
  };

  render () {
    const textStyle = this.props.todo.completed ? {'textDecoration': 'line-through'} : {}
    return (
      <tr>
        <td>
          <input type='checkbox' value={this.props.todo.completed} onChange={() => { this.props.onCompleted(this.props.todo) } } />
        </td>
        <td>
          <span style={textStyle}>
            {this.props.todo.text}
          </span>
        </td>
      </tr>
    )
  }
}

export default Todo
