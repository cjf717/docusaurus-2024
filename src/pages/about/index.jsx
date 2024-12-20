import React from 'react';
import Layout from '@theme/Layout';
import styles from "./style.module.css"

export default function AboutMe() {
  return (
    <Layout title="AboutMe" description="AboutMe React Page">
      <div className={styles.main}>
        <div>相关文档</div>
        <ul>
          <li>
            <a href="https://github.com/facebook/docusaurus" target="_blank" rel="noopener noreferrer">docusaurus官方Github</a>
          </li>
          <li>
            <a href="https://docusaurus.io/zh-CN/" target="_blank" rel="noopener noreferrer">docusaurus官方文档</a>
          </li>
          <li>
            <a href="https://docusaurus.nodejs.cn/" target="_blank" rel="noopener noreferrer">docusaurus民间中文文档</a>
          </li>
          <li>
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React官方文档</a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}