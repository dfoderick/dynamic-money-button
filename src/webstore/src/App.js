import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MoneyButton from '@moneybutton/react-money-button'

class App extends Component {

  state = {
          currentPrice: 1,
          QOH: 100
  }

  supportsSSE() {
    return !!window.EventSource;
}

componentDidMount() {
  if (this.supportsSSE() && !this.eventListener) {
      this.eventListener = new EventSource("/sse");
      this.subscribe(this.eventListener);
  }
}

componentWillUnmount() {
  if (this.eventListener){
      this.eventListener.close();
      //console.log("Miners: unsubscribed");
  }
}

subscribe(es) {
  const that = this;
  if (!es) return;

  es.addEventListener("dynamic-money-button", (e) => {
    that.updateMoneyButton(e.data);
  }, false);

}

updateMoneyButton = (moneyMessage) => {
  const msgJson = JSON.parse(moneyMessage);
  const updatedItem = JSON.parse(msgJson.body)[0];
  this.setState({currentPrice: updatedItem.price});
  this.setState({currentQOH: updatedItem.QOH});
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

<div>
  Link to open store management
</div>
        <div>
          QOH: {this.state.QOH}
        </div>

        <div>
          <MoneyButton
            to='145'
            amount={this.state.currentPrice}
            currency="USD"
            devMode = {true}
          />
        </div>

      </div>
    );
  }
}

export default App;
