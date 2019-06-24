import React, { Component, createRef } from 'react';
import {
  TracksItem,
  TracksName,
  Number,
  Time,
} from "./style";

class List extends Component {
  constructor(props) {
    super(props);
    this.meuBotao = createRef()
    this.state = {
      showAudio: false
    };
  }

  play() {
    console.log(this.meuBotao.current.currentTime)
    if(this.state.showAudio === true){
      console.log('pause')
      this.meuBotao.current.pause();
      this.setState({ showAudio: false }) 
    }else if (this.state.showAudio === false){
      console.log('star')
      this.meuBotao.current.play();
      this.setState({ showAudio: true }) 
    }
  }
  // componentDidUpdate() {
  //     console.log('estou sendo atualizado')
  // }

  // componentWillReceiveProps(nextProps){
  //   console.log(this.props, "teste")
  // }

  render() {
    return (
      <TracksItem onClick={() => this.play()} className={this.state.showAudio? 'active':''} >
        <TracksName><Number>{`${this.props.number}.`}</Number>{this.props.name}</TracksName>
        <Time>{((this.props.duration / 1000) / 60).toFixed(2).replace(".", ":")}</Time>
        <audio ref={ this.meuBotao } autoplay >
          <source src={this.props.audio} type="audio/ogg" />
          <source src={this.props.audio} type="audio/mpeg"/>
        </audio>
      </TracksItem>
    )
  }
}

export default List; 