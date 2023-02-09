'use client';

import { Container, Skeleton } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import type { MutableRefObject } from 'react';
import { useEffect, useRef, useState } from 'react';

import { KEYPOINT } from '@/const';
import { Canvas, ORIGIN } from '@/lib/canvas';

const url = 'video/crouch_left.mov';
const VideoWidth = 1244;
const VideoHeight = 432;

const CanvasPage = () => {
  const video = useRef<HTMLVideoElement | null>(null);
  const { ref, width } = useElementSize();
  const [ratio, setRatio] = useState(1.0);
  useEffect(() => {
    setRatio(window.devicePixelRatio);
  }, []);

  return (
    <Container>
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
              videoWidth={1244}
              videoHeight={432}
              canvasHeight={width * (VideoHeight / VideoWidth)}
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
    </Container>
  );
};

export default CanvasPage;
