import React, { memo, useRef, useState, useEffect } from 'react'
import Layout from '@theme/Layout';
import styles from "./index.module.css"

const Aplayer = memo(() => {
  const aplayerRef = useRef(null)
  const [count, setCount] = useState(1)
  useEffect(()=>{
    console.log("执行uesEffect",count);
    return ()=>{
      document.title = "aplayer：" + count
    }
  },[])
  return (
    <div>
      <h3>Aplayer</h3>
      <div>count: {count}</div>
      <button onClick={()=>setCount(count+1)}>+1</button>
      <div id="aplayer"></div>
    </div>
  )
})


export default function Music() {
  return (
    <Layout title="Music" description="Music React Page">
      <div className={styles.main}>
        <Aplayer />
      </div>
    </Layout>
  );
}