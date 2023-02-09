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

export type MarkerFillColor =
  | 'purple'
  | 'yellow'
  | 'orange'
  | 'blue'
  | 'green'
  | 'black';
