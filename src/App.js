import React, { Component } from 'react';
import './App.css';
import KoreaGraph from './components/koreagraph';
import Situation from './components/situation';
import WorldGraph from './components/worldgraph';

export default class App extends Component{
  state = {
    graph: 'korea',
  }

  handleKoreaClick = () => {
    this.setState({
      graph: 'korea'
    });
  }

  handleWorldClick = () => {
    this.setState({
      graph: 'world'
    });
  }

  render(){
    return(
      <div className='App'>
        <h1>신종 코로나 바이러스 그래프</h1>
        {this.state.graph === 'korea' ? <KoreaGraph /> : <WorldGraph />}
        <button onClick={this.handleKoreaClick}>국내 정보</button>
        <button onClick={this.handleWorldClick}>국외 정보</button>
        <Situation />
      </div>
    );
  }
}
