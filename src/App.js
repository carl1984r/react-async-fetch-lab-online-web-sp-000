import React, from "react";

export default class App extends Component {

  componentDidMount() {
      fetch('http://api.open-notify.org/astros.json')
  }

  render() {

  }

}
