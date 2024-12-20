import React, { memo, useRef,useEffect } from 'react'
import styles from "./index.module.css"

const audio = memo(({music, playClick}) => {
  const audioRef = useRef()
  const playMucic = ()=>{
    console.log("播放音乐", music);
    playClick(music)
  }
  useEffect(()=>{
    console.log("执行了useEffect", audioRef.current);
    return () => {
      audioRef.current.play()
    }
  },[music])
  return (
    <div>
      <div>        
        <audio controls src={music.url} ref={audioRef} preload="none"></audio>
      </div>
      <div className={styles.audio}>
        <div className={styles.album}>
          <img className={styles.cover} src={music.cover} alt="封面" />
        </div>
        <div className={styles.content}>
          <div>{music.title} - {music.artist}</div>
          <div>播放进度：</div>
          <div>播放时间：时长：</div>
          {/* <audio controls src={music.url} ref={audioRef}></audio> */}
          <div>
            <button onClick={()=>playMucic()}>播放</button>
            <button onClick={()=>playMucic()}>暂停</button>
            <button onClick={()=>playMucic()}>停止</button>
          </div>
        </div>
      </div>
    </div>
  )
})

export default audio