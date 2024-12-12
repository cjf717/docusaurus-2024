import Layout from '@theme/Layout';

export default function AplayerFun(): JSX.Element {
  return (
    <Layout title="audio原生播放器" description="audio原生播放器的测试">
      <audio controls src="https://radiopull.radiofoshan.com.cn/live/1400820947_BSID_41_audio.m3u8"></audio>
      <audio controls>
      <source src="myAudio.mp3" type="audio/mpeg" />
      <source src="myAudio.ogg" type="audio/ogg" />
      <p>
        Your browser doesn't support HTML5 audio. Here is a
        <a href="myAudio.mp4">link to the audio</a> instead.
      </p>
    </audio>
    </Layout>
  );
}
