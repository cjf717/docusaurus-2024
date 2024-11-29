import React from 'react'
import ReactPlayer from 'react-player'

// Render a YouTube video player
{/* <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' /> */}

export default function AplayerFun(): JSX.Element {
  return (
    <ReactPlayer
      url={[
        'https://lhttp.qingting.fm/live/4804/64k.mp3',
        'https://lhttp.qtfm.cn/live/1262/64k.mp3',
        'https://lhttp.qtfm.cn/live/4955/64k.mp3'
      ]}
      controls
    />
  );
}
