import React, { PropTypes } from 'react'

import Container from 'containers/Container'
import TodoPresentation from 'components/TodoPresentation/TodoPresentation'

class Todo extends Container {
  static propTypes = {
    todo: PropTypes.object.isRequired
  };

  render () {
    return (
      <TodoPresentation todo={this.todo}
                      deleteButtonVisible={this.deleteButtonVisible()}
                      onCompleted={() => this.handleCompleted()}
                      onDelete={() => this.handleDelete()}
                      onDeleteButtonVisibilityChanged={(id) => this.handleDeleteButtonVisibilityChanged(id)}
      />
    )
  }

  deleteButtonVisible () {
    return this.reduxState.deleteButtonOnTodo === this.todo.id
  }

  handleCompleted () {
    this.store.dispatch({type: 'UPDATE_TODO', id: this.todo.id, updates: {completed: !this.todo.completed}})
  }

  handleDelete () {
    this.store.dispatch({type: 'DELETE_TODO', id: this.todo.id})
  }

  handleDeleteButtonVisibilityChanged (id) {
    this.store.dispatch({type: 'SHOW_DELETE_BUTTON_ON_TODO', todo: id})
  }

  get todo () {
    return this.props.todo
  }
}

export default Todo
