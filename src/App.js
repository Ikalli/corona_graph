import React, { Component } from 'react';
import './App.css';
import KoreaGraph from './components/koreagraph';
import KoreaSituation from './components/koreasituation';
import WorldGraph from './components/worldgraph';
import WorldSituation from './components/worldsituation';

export default class App extends Component{
  state = {
    viewpoint: 'korea',
  }

  handleKoreaClick = () => {
    this.setState({
      viewpoint: 'korea'
    });
  }

  handleWorldClick = () => {
    this.setState({
      viewpoint: 'world'
    });
  }

  render(){
    return(
      <div className='App'>
        <div className='headline'>
          <span className="title">신종 코로나바이러스<br/>현황 그래프</span>
        </div>
        <p>업데이트: 2020.02.05 09:00</p>
        {this.state.viewpoint === 'korea' ? <KoreaGraph /> : <WorldGraph />}
        <div className='btn_group'>
          <button onClick={this.handleKoreaClick} className='korea'>국내 정보</button>
          <button onClick={this.handleWorldClick} className='world'>국외 정보</button>
        </div>
        {this.state.viewpoint === 'korea' ? <KoreaSituation /> : <WorldSituation />}
        <div className='tail'>
          <p className='source'>출처: 질병관리본부, 해외감염병 NOW</p>
          <p className='feedback'>FeedBack: dev.ekalii@gmail.com</p>
          <a href="https://github.com/Ekalii/corona_graph" className='github'>Github Source</a>
        </div>
      </div>
    );
  }
}
