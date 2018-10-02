import React from 'react'

class Card extends React.Component {
  state= { showBack: false }


  componentDidMount() {
    console.log(this.props) //why console.log?
  }
  
  
  toggleShow = () => {
    this.setState({ showBack: !this.state.showBack })
  }

  render() {
    return (

    )
  }

  

  



}


export default Card;
