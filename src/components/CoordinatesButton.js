// Code CoordinatesButton Component Here
import React, { Component } from 'react'; 

export default class CoordinatesButton extends Component {

  coordinatesButtonHandler = (e) => {
    let array = [event.clientX, event.clientY]
    this.props.OnReceiveCoordinates(array)
  }
}



 render() {
    return (
      <button onClick={this.coordinatesButtonHandler}>Coordinates button</button>
    )
  }
}