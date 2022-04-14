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
    famille,
    isShow: true
  }

  handleClick = (num) => {
    const famille = { ... this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
  }

  handleChange = (event, id) => {
    const famille = { ... this.state.famille }
    const nom = event.target.value
    // console.log(nom)
    famille[id].nom = nom
    this.setState({ famille })
  }

  cacherNom = id => {
    const famille = { ... this.state.famille }
    famille[id].nom = 'X'
    this.setState({ famille })
  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({ isShow })
  }

  render() {
    const { titre } = this.props
    const { famille, isShow } = this.state

    let descriptiom = null

    if (isShow) {
      descriptiom = (
        <strong>Je suis une fille.</strong>
      )
    }

    const liste = Object.keys(famille)
      .map(membre => (
        <Membre
          key={membre}
          handleChange={event => this.handleChange(event, membre)}
          cacherNom={() => this.cacherNom(membre)}
          age={famille[membre].age}
          nom={famille[membre].nom} />

      ))

    return (
      <div className="App">
        <h1>{titre}</h1>
        {liste}
        {/* <Membre

          age={this.state.famille.membre2.age}
          nom={famille.membre2.nom}>
          {descriptiom}
        </Membre>
        <Button
          vieillir={() => this.handleClick(2)} /> */}

      </div>
    )
  }
}

export default App;
