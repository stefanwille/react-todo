import React from 'react'

import HomeView from 'views/HomeView/HomeView'

export default class Root extends React.Component {
  static propTypes = {
  };

  static contextTypes = {
    store: React.PropTypes.object
  };

  render () {
    const store = this.context.store
    return (
      <div className='container'>
        <HomeView store={store}/>
      </div>
    )
  }
}
