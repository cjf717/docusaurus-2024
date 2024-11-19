import React from 'react';
import ReactAplayer from 'react-aplayer';

export default class Aplayer extends React.Component {
  // constructor (props) {
  //   super(props)
  //   console.log('constructor执行')
  // }
  componentDidMount () {
    console.log('componentDidMount执行')
  }
  // event binding example
  onPlay = () => {
    console.log('on play');
  };

  onPause = () => {
    console.log('on pause');
  };

  // example of access aplayer instance
  onInit = ap => {
    console.log('on init');
    // this.ap = ap;
  };

  render() {
    const props = {
      theme: '#F57F17',
      lrcType: 3,
      audio: [
        {
          name: '测试audio',
          artist: 'Goose house',
          url: 'hikarunara.mp3',
          cover: 'hikarunara.jpg',
          lrc: 'hikarunara.lrc',
          theme: '#ebd0c2'
        }
      ]
    };

    return (
      <div>
        {/* <ReactAplayer
          {...props}
          onInit={this.onInit}
          onPlay={this.onPlay}
          onPause={this.onPause}
        /> */}
        {/* example of access aplayer instance API */}
        {/* <button onClick={() => this.ap.toggle()}>toggle</button> */}
      </div>
    );
  }
}
