'use client';

import type { PlayerRef } from '@remotion/player';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';

import type { CompProps } from '@/lib/player';
import { PlayerController, PlayerVideo, usePlayer } from '@/lib/player';

type PlayerProps = {
  durationInFrames: number;
  playerWidth: number;
  videoUrl: string;
} & CompProps<any>;

export const Player: FC<PlayerProps> = ({
  durationInFrames,
  playerWidth,
  videoUrl,
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
