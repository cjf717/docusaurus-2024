import {useEffect} from "react"
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import Aplayer from '@site/src/components/Aplayer';
import Heading from '@theme/Heading';
import styles from './styles.module.scss';
// import 'APlayer/dist/APlayer.min.css';
// import APlayer from 'APlayer';

// import MyAplayer from "./my-aplayer"
// import MyReactAplayer from "./my-react-aplayer"
import MyReactPlayer from "./my-react-player"

export default function AplayerFun(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  // const options = {
  //   container: document.getElementById('aplayer'),
  //   audio: [{
  //       name: 'name',
  //       artist: 'artist',
  //       url: 'url.mp3',
  //       cover: 'cover.jpg'
  //     }]
  //   }
  // const ap = new APlayer(options);
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        {/* <Aplayer /> */}
        <h3> player播放器 </h3>
        <MyReactPlayer />
        {/* <MyReactAplayer /> */}
        {/* <MyAplayer /> */}
      </main>
    </Layout>
  );
}
