import React, { PropTypes } from 'react'

import HomeView from 'views/HomeView/HomeView'

export default class Root extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render () {
    return (
      <div className='container'>
        <HomeView store={this.props.store}/>
      </div>
    )
  }
}
