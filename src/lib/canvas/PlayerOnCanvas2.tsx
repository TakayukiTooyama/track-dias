'use client';

import type { FC, MutableRefObject } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useCurrentFrame, useVideoConfig, Video } from 'remotion';

import { KEYPOINT } from '@/const';
import { Canvas } from '@/lib/canvas/Canvas';
import { ORIGIN } from '@/lib/canvas/const';
import type { Keypoint } from '@/type';

type PlayerOnCanvasProps = {
  url: string;
};

export const PlayerOnCanvas2: FC<PlayerOnCanvasProps> = ({ url }) => {
  const video = useRef<HTMLVideoElement | null>(null);

  //キャンバスのサイズの変え方を見つける

  const [ratio, setRatio] = useState(1.0);
  useEffect(() => {
    setRatio(window.devicePixelRatio);
  }, []);

  // hooks
  const { width } = useVideoConfig();
  const currentFrame = useCurrentFrame();

  /* キャンバス情報 */
  const [keypoints, setKeypoints] = useState<Keypoint[]>(KEYPOINT);
  const canvasHeight = width / (1244 / 432);
  const canvasWidth = width;

  return (
    <>
      {url && (
        <div className='flex h-full w-full flex-col justify-center'>
          <div className='w-full'>
            <Video ref={video} className='w-full' src={url} />
          </div>
          {video && (
            <Canvas
              video={video as MutableRefObject<HTMLVideoElement>}
              keypoints={keypoints}
              currentFrame={currentFrame}
              canvasHeight={canvasHeight}
              canvasWidth={canvasWidth}
              devicePixelRatio={ratio}
              canvasViewState={{ offset: ORIGIN, scale: 1 }}
              videoHeight={432}
              videoWidth={1244}
            />
          )}
        </div>
      )}
    </>
  );
};
