import type { FC } from 'react';
import ReactPlayer from 'react-player/lazy';

type VideoPlayerProp = {
  url: string;
};

export type VideoState = {
  duration: number;
  loaded: number;
  muted: boolean;
  playbackRate: number;
  played: number;
  playing: boolean;
  seeking: boolean;
  url: string | null;
  volume: number | null;
};

export const VideoPlayer: FC<VideoPlayerProp> = ({ url }) => (
  <div className='aspect-video'>
    <ReactPlayer
      url={url}
      width='100%'
      height='100%'
      controls={true}
      playing={true}
      muted={true}
    />
  </div>
);
