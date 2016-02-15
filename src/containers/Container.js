import React from 'react'

export class Container extends React.Component {
  static contextTypes = {
    store: React.PropTypes.object
  };

  get reduxState () {
    return this.store.getState()
  }

  get store () {
    return this.context.store
  }

  componentDidMount () {
    this.unsubscribe = this.store.subscribe(() => { this.forceUpdate() })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }
}

export default Container
