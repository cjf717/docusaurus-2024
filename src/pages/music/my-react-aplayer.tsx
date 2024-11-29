import {useEffect} from "react"
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './styles.module.scss';

import React from 'react';
import ReactAplayer from 'react-aplayer';

class MyAplayer extends React.Component {
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

class MyCpn extends React.Component {
  render(){
    return (<div>我的自定义组件</div>)
  }
}
export default function AplayerFun(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="音乐播放器"
      description="react-aplayer播放器的测试">
      <main className={styles.main}>
        <h3> react-aplayer音乐播放器 </h3>
        {/* <MyCpn /> */}
      </main>
    </Layout>
  );
}
