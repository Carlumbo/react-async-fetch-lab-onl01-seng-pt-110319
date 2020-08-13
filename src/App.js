import React, { Component } from 'react'

class App extends Component {
  
  
  state = {
    spacePeeps: []
  }
  
  
  render() {
    return (
      <div>
     {this.state.spacePeeps.map((astronaut, id) => <h1 key={id}>{astronaut.name}</h1>)}
      </div>
     )
  }
  
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(({people}) => this.setState({ spacePeeps: people }))
  }
  
}
export default App