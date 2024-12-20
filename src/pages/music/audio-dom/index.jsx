import React, { memo, useState, useEffect } from 'react'
import Layout from '@theme/Layout';
import musicList from "/json/musics.json"
import radiofoshan from "/json/radiofoshan.json"
import MyAudio from "@site/src/components/AudioDom"
import Card from "@site/src/components/AudioCard"
import styles from "./index.module.css"

const AudioDom = memo(() =>  {
  const  [musicCurrent, setMusic] = useState(musicList[0])

  useEffect(()=>{
    console.log("useEffect只执行一次");
    // if (audioRef) audioRef.current.src = url
    // return ()=>{
    //   console.log("useEffect返回内容");
    // }
  },[])


  const playMusic = (music)=> {
    // console.log("在父组件中，监听到点击了播放按钮", music);
    setMusic(music)
    playAudio(music)
  }
  const playAudio = (music)=> {
    console.log("在父组件中，监听到点击了播放按钮", music);
    // setMusic(music)
  }
  return (
    <Layout title="audio原生dom播放器" description="audio-dom React Page">
      <div className={styles.main}>
        <h3>audio原生dom播放器</h3>
        <div>
          <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio" target="_blank" rel="noopener noreferrer">mdn文档</a>
        </div>
        <div><MyAudio music={musicCurrent} playClick={(item)=>playAudio(item)} /></div>
        <form>
          <div>
            <label htmlFor="cover">封面图片</label>
            <input type="text" id="cover" name="cover" />
          </div>
          <div>
            <label htmlFor="title">标题名称</label>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="artist">艺术家名</label>
            <input type="text" id="artist" name="artist" />
          </div>
          <div>
            <label htmlFor="url">播放地址</label>
            <input type="url" id="url" name="url" />
          </div>
          <div>
            <button>提交播放</button>
          </div>

        </form>
        <div>
          {musicList.map((item,index)=>{
            return <Card item={item} key={index} playClick={(item)=>playMusic(item)} />
            })
          }
        </div>
        <div>
          {radiofoshan.map((item,index)=>{
            const music = {
              id: item.id,
              title: item.name,
              artist: '佛山电台',
              url: `https://radiopull.radiofoshan.com.cn/live/1400820947_BSID_${item.id}_audio.m3u8`,
              cover: `/img/site_logo/foshan_cover/${item.cover}`,
              type: 'customHls',
            }
            return <Card item={music} key={music.id} playClick={(item)=>playMusic(item)} />
            })
          }
        </div>
      </div>
    </Layout>
  );
})

export default AudioDom
