//need to straighten out card from deck (deck = a deck, card = single card)
//sudo code some more and think this through


import React, { Component } from 'react';
import Card from './Card'

class App extends React.Component {

state = {
  Deck: [
    { id: 1, front: 'front', back: 'back' },
    { id: 2, front: 'front2', back: 'back'},
    { id: 3, front: 'front3', back: 'back'},
    { id: 4, front: 'front4', back: 'back'},
  ]
}

displayCards() {
  return this.state.Deck.map(card => {
    return <button onClick = {() => this.flipCard.card }>
    {card.front}
    </button>
  })
}



render() {
  return(
    <div>
      <ul>
        <Deck info={this.state.Deck[0]} />
        {
          this.displayCards
        }
      </ul>
    </div>
  )
}
}


export default App;
