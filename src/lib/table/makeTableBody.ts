import { strictEntries } from '@/lib/table/makeTableHead';
import type {
  BodayPartsXCoorLabel,
  BodayPartsYCoorLabel,
  DolphinTable,
  KeypointTable,
} from '@/lib/table/type';
import type { Keypoint } from '@/type';

export const makeKeypointTableBody = (keypoints: Keypoint[]): KeypointTable[] =>
  keypoints.map((keypoint, idx) => {
    const fixRecord = {
      frame: idx,
      time: Number((idx * 0.033333333).toFixed(2)),
    };
    const keypointData = strictEntries(keypoint).reduce((prev, keyValue) => {
      if (keyValue[1]) {
        const part_x = `${keyValue[0]}_x` as BodayPartsXCoorLabel;
        const part_y = `${keyValue[0]}_y` as BodayPartsYCoorLabel;
        const record_xy = {
          ...fixRecord,
          [part_x]: keyValue[1][0],
          [part_y]: keyValue[1][1],
          ...prev,
        };
        return record_xy;
      }
      return prev;
    }, {});
    return keypointData as KeypointTable;
  });

export const makeAnalysisResultTableBody = (): // videoName: string,
// keypoints: Keypoint[],
// motion: Motion,
DolphinTable[] => [
  {
    videoName: 'tooyama_crouch.mp4',
    ankleAngle: 50,
    hipAngle: 45,
    kickFrequency: null,
    kickWidth: null,
    kneeAngle: 100,
    swimmingSpeed: null,
    trunkAngle: null,
  },
  {
    videoName: 'dolphin.mp4',
    ankleAngle: 50,
    hipAngle: 45,
    kickFrequency: null,
    kickWidth: null,
    kneeAngle: 100,
    swimmingSpeed: null,
    trunkAngle: null,
  },
  {
    videoName: 'start.mp4',
    ankleAngle: 50,
    hipAngle: 45,
    kickFrequency: null,
    kickWidth: null,
    kneeAngle: 100,
    swimmingSpeed: null,
    trunkAngle: null,
  },
];

// export const makeAnalysisResultTableBody = (
//   videoName: string,
//   keypoints: Keypoint[],
//   motion: Motion,
// ): DolphinTable[] =>
//   keypoints.map((keypoint) => ({
//     ankleAngle: calcAngle(
//       keypoint.left_knee,
//       keypoint.left_ankle,
//       keypoint.left_foot_index,
//     ),
//     frame: 1,
//     hipJoint: calcAngle(
//       keypoint.left_shoulder,
//       keypoint.left_hip,
//       keypoint.left_knee,
//     ),
//     kneeJoint: calcAngle(
//       keypoint.left_hip,
//       keypoint.left_knee,
//       keypoint.left_ankle,
//     ),
//     trunkAngle: calcAngle(keypoint.left_shoulder, keypoint.left_hip, [
//       keypoint.left_hip?.[0],
//       keypoint.left_shoulder?.[1],
//     ]),
//   }));
