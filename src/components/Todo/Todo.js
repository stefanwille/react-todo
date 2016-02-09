import React, { PropTypes } from 'react'

class Todo extends React.Component {
  static propTypes = {
    todo: PropTypes.any.isRequired,
    onCompleted: PropTypes.func.isRequired
  };

  render () {
    const textStyle = this.props.todo.completed ? {'textDecoration': 'line-through'} : {}
    return (
      <tr onMouseEnter={this.handleMouseEnter.bind(this)}>
        <td>
          <input type='checkbox' checked={this.props.todo.completed ? 'checked' : ''} onChange={() => { this.props.onCompleted(this.props.todo) } } />
        </td>
        <td>
          <span style={textStyle}>
            {this.props.todo.text}
          </span>
        </td>
        <td>
          <a href='#'>X</a>
        </td>
      </tr>
    )
  }

  handleMouseEnter () {
    console.log("onMouseEnter")
  }
}

export default Todo
