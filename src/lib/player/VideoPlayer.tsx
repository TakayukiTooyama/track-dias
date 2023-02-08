import { AspectRatio } from '@mantine/core';
import type { FC } from 'react';

type VideoPlayerProp = {
  url: string;
};

export const VideoPlayer: FC<VideoPlayerProp> = ({ url }) => (
  <AspectRatio
    ratio={16 / 9}
    sx={(theme) => ({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[3],
    })}
  >
    {url ? (
      <video
        src={url}
        controls
        muted
        loop
        playsInline
        autoPlay
        preload='metadata'
        controlsList='nodownload'
      />
    ) : null}
  </AspectRatio>
);
