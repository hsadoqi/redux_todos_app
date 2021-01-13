import React, { Component } from 'react'
import List from './List'

class App extends Component {

  render(){
    const name = "Bob"
    return (
      <div className="App">
        <h1>Hello {name}</h1>
        <List list={["Run"]}/>
      </div>
    );
  }
}

export default App;
