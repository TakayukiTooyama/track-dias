import { useCallback } from 'react';

import type { CanvasViewState } from '@/lib/canvas';
import {
  clearCanvas,
  drawMarkers,
  drawStickPicture,
  drawVideoOneFrame,
} from '@/lib/canvas';
import type { Keypoint } from '@/type';

type Return = [
  (
    context: CanvasRenderingContext2D,
    canvasHeight: number,
    canvasWidth: number,
  ) => void,
  (
    context: CanvasRenderingContext2D,
    canvasHeight: number,
    canvasWidth: number,
    canvasViewState: CanvasViewState,
  ) => void,
];

export const useDraw = (
  videoWidth: number,
  videoHeight: number,
  video: HTMLVideoElement,
  keypoint: Keypoint,
): Return => {
  const draw = useCallback(
    (
      context: CanvasRenderingContext2D,
      canvasWidth: number,
      canvasHeight: number,
    ) => {
      clearCanvas(context, canvasWidth, canvasHeight);
      drawVideoOneFrame(context, video, canvasWidth, canvasHeight);
      drawStickPicture(
        context,
        keypoint,
        canvasWidth,
        canvasHeight,
        videoWidth,
        videoHeight,
      );
      drawMarkers(
        context,
        keypoint,
        canvasWidth,
        canvasHeight,
        videoWidth,
        videoHeight,
      );

      video.requestVideoFrameCallback(() => {
        draw(context, canvasWidth, canvasHeight);
      });
    },
    [videoWidth, videoHeight, video, keypoint],
  );

  /* リセットボタンを押した時の処理 */
  const clearAndRedraw = useCallback(
    (
      context: CanvasRenderingContext2D,
      canvasWidth: number,
      canvasHeight: number,
      canvasViewState: CanvasViewState,
    ) => {
      if (context) {
        context.clearRect(
          -canvasViewState.offset.x,
          -canvasViewState.offset.y,
          canvasWidth / canvasViewState.scale,
          canvasHeight / canvasViewState.scale,
        );
        draw(context, canvasWidth, canvasHeight);
      }
    },
    [draw],
  );

  return [draw, clearAndRedraw];
};
