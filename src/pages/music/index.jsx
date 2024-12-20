import React from 'react';
import Layout from '@theme/Layout';
import styles from "./style.module.css"

export default function Music() {
  return (
    <Layout title="Music" description="Music React Page">
      <div className={styles.main}>
        <h3>Music</h3>
        <div><a href="./audio-dom/">原生dom播放器</a></div>
        <div><a href="./aplayer/">aplayer播放器</a></div>
        <div><a href="./react-aplayer/">react-aplayer播放器</a></div>
      </div>
    </Layout>
  );
}