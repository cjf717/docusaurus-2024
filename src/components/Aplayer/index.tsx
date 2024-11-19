import React from 'react';
import APlayer from 'react-aplayer';

const APlayerComponent = () => {
  const audio = {
    title: 'Preparation',
    artist: 'The Secret Circle',
    src: 'https://demo.com/music.mp3',
    // 可以添加更多的音频属性
  };

  return (
    <div>
      <h3>aplayer播放器</h3>
      <APlayer {...audio} />
    </div>
  );
};

export default APlayerComponent;
