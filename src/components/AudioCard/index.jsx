import React, { memo } from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from "./index.module.css"

const card = memo(({item, playClick}) => {
  // const { item, playClick } = props;
  // const playBtn = ()=>{
  //   // console.log("点击了播放按钮",item, playClick);
  //   playClick()
  // }
  return (
    <div className={styles.card}>
      <div className={styles.album}>
        <img src={useBaseUrl(item.cover)} alt="封面图片" className={styles.cover} />
      </div>
      <div className={styles.content}>
        <h5 className={styles.title}>{item.title}</h5>
        <div className={styles.artist}>{item.artist}</div>
        <div className={styles.url}><a href={item.url} target="_blank" rel="noopener noreferrer">url地址</a></div>
        <div className={styles.playmusic}><button onClick={()=>playClick(item)}>播放</button></div>
      </div>
    </div>
  )
})

export default card
