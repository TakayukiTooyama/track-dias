export type AngleData = {
  angle: number;
  time: number;
};

export type RechartsDotPayload = {
  cursor: string;
  cx: number;
  cy: number;
  dataKey: string;
  fill: string;
  index: number;
  payload: AngleData;
  r: number;
  stroke: string;
  strokeWidth: number;
  value: number;
};
