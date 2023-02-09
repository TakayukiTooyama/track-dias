import { Skeleton } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import type { FC, MutableRefObject } from 'react';
import { useRef } from 'react';

import { KEYPOINT } from '@/const';
import { Canvas, ORIGIN } from '@/lib/canvas';

type VideoOnCanvas = {
  url: string;
  videoHeight: number;
  videoWidth: number;
};

export const VideoOnCanvas: FC<VideoOnCanvas> = ({
  url,
  videoHeight,
  videoWidth,
}) => {
  const { devicePixelRatio: ratio = 1 } = window;
  const video = useRef<HTMLVideoElement | null>(null);
  const { ref, width } = useElementSize();

  return (
    <div className='h-full w-full bg-black'>
      <div
        className='relative mx-auto aspect-video max-h-80 bg-gray-800'
        ref={ref}
      >
        {url && (
          <video
            ref={video}
            className='absolute top-0 left-0 w-full'
            src={url}
          />
        )}
        {video ? (
          <Canvas
            video={video as MutableRefObject<HTMLVideoElement>}
            keypoints={KEYPOINT}
            currentFrame={0}
            videoWidth={videoWidth}
            videoHeight={videoHeight}
            canvasHeight={width * (videoHeight / videoWidth)}
            canvasWidth={width}
            devicePixelRatio={ratio}
            canvasViewState={{
              offset: ORIGIN,
              scale: 1,
            }}
          />
        ) : (
          <Skeleton className='h-full w-full' />
        )}
      </div>
    </div>
  );
};
