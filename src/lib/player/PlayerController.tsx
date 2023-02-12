'use client';
import { Box, Button, Menu } from '@mantine/core';
import type { PlayerRef } from '@remotion/player';
import type { Dispatch, FC, MouseEvent, SetStateAction } from 'react';
import { useCallback } from 'react';
import {
  Check,
  Maximize,
  PlayerPause,
  PlayerPlay,
  Repeat,
  RepeatOff,
  Volume,
  VolumeOff,
} from 'tabler-icons-react';

import { CustomMenu } from '@/component/element';

const playbackRateList = ['1.0', '0.75', '0.5', '0.25', '0.1'];

type PlayerControllerProps = {
  loop: boolean;
  playbackRate: number;
  player: PlayerRef;
  setLoop: Dispatch<SetStateAction<boolean>>;
  setPlaybackRate: Dispatch<SetStateAction<number>>;
};

export const PlayerController: FC<PlayerControllerProps> = ({
  loop,
  playbackRate,
  player,
  setLoop,
  setPlaybackRate,
}) => {
  const handlePlayVideo = () => {
    player.play();
  };
  const handlePauseVideo = () => {
    player.pause();
  };
  const handleRepeatVideo = () => {
    setLoop((prev) => !prev);
  };
  const handleVolumeOn = () => {
    player.unmute();
  };
  const handleVolumeOff = () => {
    player.mute();
  };
  const handleSelectPlaybackRate = useCallback(
    (
      _e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
      rate: string,
    ) => {
      setPlaybackRate(parseFloat(rate));
    },
    [setPlaybackRate],
  );
  const handleFullScreen = () => {
    player.requestFullscreen();
  };

  return (
    <Box
      className='flex w-full items-center justify-between px-4 pt-2'
      sx={(theme) => ({
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      })}
    >
      <div className='flex items-center space-x-6'>
        {player.isPlaying() ? (
          <PlayerPause onClick={handlePauseVideo} />
        ) : (
          <PlayerPlay onClick={handlePlayVideo} />
        )}
        <CustomMenu
          target={
            <Button
              variant='outline'
              sx={(theme) => ({
                borderColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.gray[7]
                    : theme.colors.gray[4],
                color: theme.colorScheme === 'dark' ? 'white' : 'black',
              })}
            >
              {playbackRate}x
            </Button>
          }
        >
          {playbackRateList.map((rate) => (
            <Menu.Item
              icon={
                Number(rate) === playbackRate ? (
                  <Check size={16} />
                ) : (
                  <div className='h-4 w-4' />
                )
              }
              key={rate}
              onClick={(e) => handleSelectPlaybackRate(e, rate)}
            >
              {rate}
            </Menu.Item>
          ))}
        </CustomMenu>
      </div>
      <div className='flex items-center space-x-6'>
        {player.isMuted() ? (
          <VolumeOff onClick={handleVolumeOn} />
        ) : (
          <Volume onClick={handleVolumeOff} />
        )}
        {loop ? (
          <RepeatOff onClick={handleRepeatVideo} />
        ) : (
          <Repeat onClick={handleRepeatVideo} />
        )}
        <Maximize onClick={handleFullScreen} />
      </div>
    </Box>
  );
};
