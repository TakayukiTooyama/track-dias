import type { FC } from 'react';

import { ORIGIN } from '@/lib/canvas';

export type Point = {
  x: number;
  y: number;
};

export type CanvasViewState = {
  offset: Point;
  scale: number;
};

export type CanvasState = {
  canvasHeight: number;
  canvasViewState: CanvasViewState;
  canvasWidth: number;
  context: CanvasRenderingContext2D | null;
};

type CanvasControlsProps = {
  canvasState: CanvasState;
  setCanvasViewState: (canvasViewState: CanvasViewState) => void;
};

export const CanvasControl: FC<CanvasControlsProps> = ({
  canvasState,
  setCanvasViewState,
}) => (
  <div className='absolute bottom-0 left-0 flex flex-col'>
    <button
      onClick={() =>
        canvasState.context && setCanvasViewState({ offset: ORIGIN, scale: 1 })
      }
    >
      Zero View
    </button>
  </div>
);
