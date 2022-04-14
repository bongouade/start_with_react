import React, { Component } from 'react'
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button';

const famille = {
  membre1: {
    nom: 'Bongouade',
    prenom: 'Brice David',
    age: 24
  },
  membre2: {
    nom: 'Bouo',
    prenom: 'Helone',
    age: 5
  }
}

class App extends Component {
  state = {
    famille
  }

  handleClick = (num) => {
    const famille = { ... this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
  }

  handleChange = event => {
    const famille = { ... this.state.famille }
    const nom = event.target.value
    // console.log(nom)
    famille.membre1.nom = nom
    this.setState({ famille })
  }

  render() {
    const { titre } = this.props
    const { famille } = this.state

    return (
      <div className="App">
        <h1>{titre}</h1>
        <input value={famille.membre1.nom} onChange={this.handleChange} type="text"/>
        <Membre
          age={this.state.famille.membre1.age}
          nom={famille.membre1.nom} />
        <Membre

          age={this.state.famille.membre2.age}
          nom={famille.membre2.nom}>
          <strong>Je suis une fille.</strong>
        </Membre>
        <Button
          vieillir={() => this.handleClick(2)} />

      </div>
    )
  }
}

export default App;
