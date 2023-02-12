'use client';

import type { PlayerRef, RenderLoading } from '@remotion/player';
import { Player } from '@remotion/player';
import type { FC, RefObject } from 'react';
import { useCallback } from 'react';

import type { CompProps } from '@/lib/player';
import { PlayerVideoSkelton } from '@/lib/player';

type PlayerVideProps = {
  durationInFrames: number;
  loop: boolean;
  playbackRate: number;
  playerHeight: number;
  playerRef: RefObject<PlayerRef>;
  playerWidth: number;
  videoUrl: string;
} & CompProps<any>;

export const PlayerVideo: FC<PlayerVideProps> = ({
  durationInFrames,
  loop,
  playbackRate,
  playerHeight,
  playerRef,
  playerWidth,
  videoUrl,
  ...props
}) => {
  const renderLoading: RenderLoading = useCallback(
    () => <PlayerVideoSkelton />,
    [],
  );

  return (
    <Player
      ref={playerRef}
      controls={false}
      showVolumeControls
      compositionWidth={1920}
      compositionHeight={1080}
      fps={30}
      durationInFrames={durationInFrames}
      doubleClickToFullscreen={true}
      loop={loop}
      clickToPlay={false}
      inputProps={{ url: videoUrl }}
      renderLoading={renderLoading}
      playbackRate={playbackRate}
      spaceKeyToPlayOrPause={false}
      moveToBeginningWhenEnded={false}
      initialFrame={0}
      showPosterWhenUnplayed={true}
      showPosterWhenEnded={false}
      showPosterWhenPaused={false}
      style={{
        height: playerHeight,
        width: playerWidth,
      }}
      {...props}
    />
  );
};
