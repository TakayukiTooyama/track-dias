import type { FC, MutableRefObject } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

import type { CanvasViewState } from '@/lib/canvas';
import { useDraw } from '@/lib/canvas';
import type { Keypoint } from '@/type';

export type CanvasProps = {
  canvasHeight: number;
  canvasViewState: CanvasViewState;
  canvasWidth: number;
  currentFrame: number;
  devicePixelRatio: number;
  keypoints: Keypoint[];
  video: MutableRefObject<HTMLVideoElement>;
  videoHeight: number;
  videoWidth: number;
};

export const Canvas: FC<CanvasProps> = ({
  canvasHeight,
  canvasViewState,
  canvasWidth,
  currentFrame,
  devicePixelRatio,
  keypoints,
  video,
  videoHeight,
  videoWidth,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  const [draw] = useDraw(
    videoWidth,
    videoHeight,
    video.current,
    keypoints[currentFrame],
  );

  // セットアップ
  useLayoutEffect(() => {
    if (canvasRef.current) {
      // get new drawing context
      const renderCtx = canvasRef.current.getContext('2d');
      setContext(renderCtx);
    }
  }, [setContext]);

  // 描画
  useLayoutEffect(() => {
    if (context && video.current) {
      context.canvas.width = canvasWidth * devicePixelRatio;
      context.canvas.height = canvasHeight * devicePixelRatio;

      context.scale(
        canvasViewState.scale * devicePixelRatio,
        canvasViewState.scale * devicePixelRatio,
      );
      context.translate(canvasViewState.offset.x, canvasViewState.offset.y);
      draw(context, canvasWidth, canvasHeight);
    }
  }, [
    canvasHeight,
    canvasWidth,
    context,
    devicePixelRatio,
    draw,
    canvasViewState.offset.x,
    canvasViewState.offset.y,
    canvasViewState.scale,
    video,
  ]);

  return (
    <canvas
      ref={canvasRef}
      width={canvasWidth * devicePixelRatio}
      height={canvasHeight * devicePixelRatio}
      style={{ height: canvasHeight, width: canvasWidth }}
      className='absolute top-0 left-0 w-full'
    />
  );
};
