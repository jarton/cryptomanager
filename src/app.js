import React, { Component } from 'react'
import { render } from 'react-dom'
import Test from './Components/TestCompnent.jsx';

class App extends Component {
  render() {
    return (
      <div> 
      <Test/>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));