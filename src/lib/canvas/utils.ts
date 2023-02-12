/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { MarkerFillColor, Point } from '@/lib/canvas/type';
import type { BodyPartsKey, Keypoint, KeypointKeyValue } from '@/type';

export const calculateMousePositionOnElement = (
  event: React.MouseEvent | MouseEvent,
  element: HTMLElement,
) => {
  const viewportMousePos = { x: event.pageX, y: event.pageY };
  const boundingRect = element.getBoundingClientRect();
  const topLeftCanvasPos = { x: boundingRect.left, y: boundingRect.top };
  return diffPoints(viewportMousePos, topLeftCanvasPos);
};

export const getMarkerColor = (part: BodyPartsKey): MarkerFillColor => {
  switch (part) {
    case 'right_ear':
    case 'left_ear':
      return 'purple';
    case 'right_shoulder':
    case 'right_elbow':
    case 'right_wrist':
    case 'right_index':
      return 'yellow';
    case 'left_shoulder':
    case 'left_elbow':
    case 'left_wrist':
    case 'left_index':
      return 'orange';
    case 'right_hip':
    case 'right_knee':
    case 'right_ankle':
    case 'right_heel':
    case 'right_foot_index':
      return 'blue';
    case 'left_hip':
    case 'left_knee':
    case 'left_ankle':
    case 'left_heel':
    case 'left_foot_index':
      return 'green';
    default:
      return 'black';
  }
};

export const strictEntries = <T extends Record<string, any>>(
  object: T,
): [keyof T, T[keyof T]][] => Object.entries(object);

export const drawMarkers = (
  context: CanvasRenderingContext2D,
  keypoint: Keypoint,
  canvasWidth: number,
  canvasHeight: number,
  videoWidth: number,
  videoHeight: number,
) => {
  strictEntries(keypoint).forEach((keyValue: KeypointKeyValue) => {
    const bodyParts = keyValue[0];
    const xy = keyValue[1];
    if (xy[0] !== null) {
      context.beginPath();
      context.globalAlpha = 0.6;
      context.fillStyle = getMarkerColor(bodyParts);
      context.arc(
        xy[0] * (canvasWidth / videoWidth),
        xy[1] * (canvasHeight / videoHeight),
        8,
        0,
        2 * Math.PI,
      );
      context.fill();
    }
  });
};

export const drawMarker = (
  context: CanvasRenderingContext2D,
  bodyPart: BodyPartsKey,
  xy: [number, number],
  canvasWidth: number,
  canvasHeight: number,
  videoWidth: number,
  videoHeight: number,
) => {
  context.beginPath();
  context.fillStyle = getMarkerColor(bodyPart);
  context.arc(
    xy[0] * (canvasWidth / videoWidth),
    xy[1] * (canvasHeight / videoHeight),
    8,
    0,
    2 * Math.PI,
  );
  context.fill();
};

export const drawStickPicture = (
  context: CanvasRenderingContext2D,
  keypoint: Keypoint,
  canvasWidth: number,
  canvasHeight: number,
  videoWidth: number,
  videoHeight: number,
) => {
  /* 全18本で構成されたスティックピクチャーの始点と終点 */
  const stickPoints = [
    /* 右腕 */
    [
      keypoint.right_shoulder[0], // 始点X
      keypoint.right_shoulder[1], // 始点Y
      keypoint.right_elbow[0], // 終点X
      keypoint.right_elbow[1], // 終点Y
    ],
    [
      keypoint.right_elbow[0],
      keypoint.right_elbow[1],
      keypoint.right_wrist[0],
      keypoint.right_wrist[1],
    ],
    [
      keypoint.right_wrist[0],
      keypoint.right_wrist[1],
      keypoint.right_index[0],
      keypoint.right_index[1],
    ],

    /* 左腕 */
    [
      keypoint.left_shoulder[0],
      keypoint.left_shoulder[1],
      keypoint.left_elbow[0],
      keypoint.left_elbow[1],
    ],
    [
      keypoint.left_elbow[0],
      keypoint.left_elbow[1],
      keypoint.left_wrist[0],
      keypoint.left_wrist[1],
    ],
    [
      keypoint.left_wrist[0],
      keypoint.left_wrist[1],
      keypoint.left_index[0],
      keypoint.left_index[1],
    ],
    /* 体幹 */
    [
      keypoint.right_shoulder[0],
      keypoint.right_shoulder[1],
      keypoint.right_hip[0],
      keypoint.right_hip[1],
    ],
    [
      keypoint.right_shoulder[0],
      keypoint.right_shoulder[1],
      keypoint.left_shoulder[0],
      keypoint.left_shoulder[1],
    ],
    [
      keypoint.left_shoulder[0],
      keypoint.left_shoulder[1],
      keypoint.left_hip[0],
      keypoint.left_hip[1],
    ],
    [
      keypoint.right_hip[0],
      keypoint.right_hip[1],
      keypoint.left_hip[0],
      keypoint.left_hip[1],
    ],

    /* 右脚 */
    [
      keypoint.right_hip[0],
      keypoint.right_hip[1],
      keypoint.right_knee[0],
      keypoint.right_knee[1],
    ],
    [
      keypoint.right_knee[0],
      keypoint.right_knee[1],
      keypoint.right_ankle[0],
      keypoint.right_ankle[1],
    ],
    [
      keypoint.right_ankle[0],
      keypoint.right_ankle[1],
      keypoint.right_heel[0],
      keypoint.right_heel[1],
    ],
    [
      keypoint.right_ankle[0],
      keypoint.right_ankle[1],
      keypoint.right_foot_index[0],
      keypoint.right_foot_index[1],
    ],

    /* 左脚 */
    [
      keypoint.left_hip[0],
      keypoint.left_hip[1],
      keypoint.left_knee[0],
      keypoint.left_knee[1],
    ],
    [
      keypoint.left_knee[0],
      keypoint.left_knee[1],
      keypoint.left_ankle[0],
      keypoint.left_ankle[1],
    ],
    [
      keypoint.left_ankle[0],
      keypoint.left_ankle[1],
      keypoint.left_heel[0],
      keypoint.left_heel[1],
    ],
    [
      keypoint.left_ankle[0],
      keypoint.left_ankle[1],
      keypoint.left_foot_index[0],
      keypoint.left_foot_index[1],
    ],
  ];

  stickPoints.forEach((points: (number | null)[]) => {
    if (points[0] !== null) {
      context.beginPath();
      context.lineWidth = 4;
      context.strokeStyle = 'white';
      context.moveTo(
        points[0]! * (canvasWidth / videoWidth),
        points[1]! * (canvasHeight / videoHeight),
      );
      context.lineTo(
        points[2]! * (canvasWidth / videoWidth),
        points[3]! * (canvasHeight / videoHeight),
      );
      context.stroke();
    }
  });
};

export const drawVideoOneFrame = (
  context: CanvasRenderingContext2D,
  video: HTMLVideoElement,
  canvasWidth: number,
  canvasHeight: number,
) => {
  context.drawImage(video, 0, 0, canvasWidth, canvasHeight);
};

export const clearCanvas = (
  context: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number,
) => {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
};

/* マーカー */
export const roundToNearestTenth = (input: number): number =>
  Math.round(input * 10) / 10;

export const roundToNearestHundredth = (input: number): number =>
  Math.round(input * 100) / 100;

export const makePoint = (x: number, y: number): Point => ({ x, y });

export const addPoints = (p1: Point, p2: Point): Point => ({
  x: p1.x + p2.x,
  y: p1.y + p2.y,
});

export const diffPoints = (p1: Point, p2: Point): Point => ({
  x: p1.x - p2.x,
  y: p1.y - p2.y,
});

export const scalePoint = (p1: Point, scale: number): Point => ({
  x: p1.x / scale,
  y: p1.y / scale,
});
