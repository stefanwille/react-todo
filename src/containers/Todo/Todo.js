import React, { PropTypes } from 'react'

import {updateTodo, deleteTodo, showDeleteButtonOnTodo} from 'actions/actions'
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
    this.store.dispatch(updateTodo(this.todo, {completed: !this.todo.completed}))
  }

  handleDelete () {
    this.store.dispatch(deleteTodo(this.todo))
  }

  handleDeleteButtonVisibilityChanged (id) {
    this.store.dispatch(showDeleteButtonOnTodo(id))
  }

  get todo () {
    return this.props.todo
  }
}

export default Todo
