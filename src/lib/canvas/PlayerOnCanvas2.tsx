'use client';

import type { FC, MutableRefObject } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useCurrentFrame, useVideoConfig, Video } from 'remotion';

import { Canvas } from '@/lib/canvas/Canvas';
import { ORIGIN } from '@/lib/canvas/const';
import type { Keypoint } from '@/type';

type PlayerOnCanvasProps = {
  keypoints: Keypoint[];
  url: string;
  videoHeight: number;
  videoWidth: number;
};

export const PlayerOnCanvas2: FC<PlayerOnCanvasProps> = ({
  keypoints,
  url,
  videoHeight,
  videoWidth,
}) => {
  const video = useRef<HTMLVideoElement | null>(null);
  const [ratio, setRatio] = useState(1.0);
  const { width } = useVideoConfig();
  const currentFrame = useCurrentFrame();

  useEffect(() => {
    setRatio(window.devicePixelRatio);
  }, []);

  return (
    <>
      {url && (
        <div className='flex h-full w-full flex-col justify-center'>
          <div className='hidden w-full'>
            <Video ref={video} className='w-full' src={url} />
          </div>
          {video && (
            <Canvas
              video={video as MutableRefObject<HTMLVideoElement>}
              keypoints={keypoints}
              currentFrame={currentFrame}
              canvasHeight={width / (videoWidth / videoHeight)}
              canvasWidth={width}
              devicePixelRatio={ratio}
              canvasViewState={{ offset: ORIGIN, scale: 1 }}
              videoHeight={videoHeight}
              videoWidth={videoWidth}
            />
          )}
        </div>
      )}
    </>
  );
};
