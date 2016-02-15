import React from 'react'

import HomeView from 'views/HomeView/HomeView'

export default class Root extends React.Component {
  static propTypes = {
  };

  render () {
    return (
      <div className='container'>
        <HomeView/>
      </div>
    )
  }
}
