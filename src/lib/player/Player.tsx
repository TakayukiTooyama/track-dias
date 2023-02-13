'use client';

import type { PlayerRef } from '@remotion/player';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';

import type { CompProps } from '@/lib/player';
import { PlayerController, PlayerVideo, usePlayer } from '@/lib/player';
import type { Keypoint } from '@/type';

type PlayerProps = {
  durationInFrames: number;
  keypoints: Keypoint[];
  playerWidth: number;
  videoHeight: number;
  videoUrl: string;
  videoWidth: number;
} & CompProps<any>;

export const Player: FC<PlayerProps> = ({
  durationInFrames,
  keypoints,
  playerWidth,
  videoHeight,
  videoUrl,
  videoWidth,
  ...props
}) => {
  const [loop, setLoop] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(0.5);
  const { player, setPlayer } = usePlayer();
  const playerRef = useRef<PlayerRef>(null);

  useEffect(() => {
    if (!player && playerRef.current) {
      setPlayer(playerRef.current);
    }
  });

  return (
    <>
      <PlayerVideo
        durationInFrames={durationInFrames}
        loop={loop}
        playbackRate={playbackRate}
        playerRef={playerRef}
        playerHeight={playerWidth / (16 / 9)}
        playerWidth={playerWidth}
        videoUrl={videoUrl}
        videoHeight={videoHeight}
        videoWidth={videoWidth}
        keypoints={keypoints}
        {...props}
      />
      {playerRef.current ? (
        <PlayerController
          player={playerRef.current}
          playbackRate={playbackRate}
          loop={loop}
          setLoop={setLoop}
          setPlaybackRate={setPlaybackRate}
        />
      ) : null}
    </>
  );
};
