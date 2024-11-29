
import { Component, useRef, useEffect, createRef } from "react";

import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';
import Layout from '@theme/Layout';
import styles from './styles.module.scss';


class ApleyerClass extends Component {
  constructor() {
    super()
    this.state = { ap:null }
  }
  aplayerRef = createRef()
  getDom() {
    console.log(this.aplayerRef.current);
    console.log(this.state.ap.list);
    // this.ap.play()
  }
  componentDidMount () {
    console.log('componentDidMount执行')
    // this.getDom()
    const options = {
      // container: document.getElementById('player'),
      container: this.aplayerRef.current,
      mini: false,
      autoplay: false,
      theme: '#FADFA3',
      loop: 'none',
      order: 'list',
      preload: 'none',
      volume: 0.7,
      mutex: true,
      listFolded: false,
      listMaxHeight: 90,
      lrcType: 1,
      audio: [
        {
        name: '怀集音乐之声',
        artist: '蜻蜓FM',
        url: 'https://lhttp.qingting.fm/live/4804/64k.mp3',
        cover: '/img/logo.svg'
        },
        {
          name: '羊城交通台',
          artist: '蜻蜓FM',
          url: 'https://lhttp.qtfm.cn/live/1262/64k.mp3',
          cover: '/img/logo.svg'
        },
      ]
    }
    this.setState({ap : new APlayer(options)});
  }

  render () {
    return (
      <Layout title="Apleyer播放器" description="Apleyer播放器">
        <main className={styles.myaplayer}>
          <h3>Apleyer播放器</h3>
          <div ref={this.aplayerRef}></div>
          {/* <div><button onClick={()=>this.getDom()}>获取DOM元素</button></div> */}
        </main>
      </Layout>
    )
  }
}

// export default AplayerComponent
export default ApleyerClass
// export default function AplayerDefault() {
//   return (<div>AplayerDefault内容<ApleyerClass /></div>)
// }


