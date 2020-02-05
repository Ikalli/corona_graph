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
        <h1>신종 코로나 바이러스 현황 그래프</h1>
        <p>업데이트: 2020.02.05 09:00</p>
        {this.state.graph === 'korea' ? <KoreaGraph /> : <WorldGraph />}
        <button onClick={this.handleKoreaClick}>국내 정보</button>
        <button onClick={this.handleWorldClick}>국외 정보</button>
        <Situation />
        <p className='source'>출처: 질병관리본부</p>
      </div>
    );
  }
}
