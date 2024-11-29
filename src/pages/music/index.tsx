import {useEffect} from "react"
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './styles.module.scss';

export default function AplayerFun(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="音乐播放器" description="包含各种播放器的测试">
      <main className={styles.main}>
        <h3> 音乐播放器 </h3>
        <div><a href="./my-aplayer">my-aplayer</a></div>
        <div><a href="./my-react-aplayer">my-react-aplayer</a></div>
        <div><a href="./my-react-player">my-react-player</a></div>
        <div><a href="./meting-api">meting-api</a></div>
      </main>
    </Layout>
  );
}
