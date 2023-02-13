import { calcAngle } from '@/lib/calc/common';
import type { Keypoint, Motion } from '@/type';

export const fetchAnalysisData = (keypoints: Keypoint[], motion: Motion) => {
  switch (motion) {
    case 'dive':
      return divingAnalysis(keypoints);
    case 'dolphin':
      return dolphinAnalysis(keypoints);
    case 'run':
      return runningAnalysis(keypoints);
    default:
      return [];
  }
};

export const dolphinAnalysis = (keypoints: Keypoint[]) =>
  keypoints.map((keypoint, idx) => {
    // kickFrequency: 'キック頻度'
    keypoint.left_knee;
    keypoint.left_ankle;
    keypoint.left_foot_index;

    // kickWidth: '蹴り幅'
    keypoint.left_knee;
    keypoint.left_ankle;
    keypoint.left_foot_index;

    //swimmingSpeed: '泳速度',

    return {
      ankleAngle: calcAngle(keypoint.left_shoulder, keypoint.left_hip, [
        keypoint.left_shoulder[0],
        keypoint.left_hip[1],
      ]),
      hipAngle: calcAngle(
        keypoint.left_shoulder,
        keypoint.left_knee,
        keypoint.left_hip,
      ),
      kickFrequency: 0,
      kickWidth: 0,
      kneeAngle: calcAngle(
        keypoint.left_hip,
        keypoint.left_knee,
        keypoint.left_ankle,
      ),
      swimmingSpeed: null,
      time: Number((idx * 0.033333333).toFixed(2)),
      trunkAngle: calcAngle(keypoint.left_shoulder, keypoint.left_hip, [
        keypoint.left_shoulder[0],
        keypoint.left_hip[1],
      ]),
    };
  });

export const divingAnalysis = (keypoints: Keypoint[]) =>
  keypoints.map((keypoint, idx) => {
    // jumpDistance: '飛距離'
    keypoint.left_index;
    // passTime: '5m通過時間'
    // reactionTime: 'リアクションタイム'
    // htov: 'HTOV（離台時水平速度）'

    return {
      ankleAngle: calcAngle(keypoint.left_shoulder, keypoint.left_hip, [
        keypoint.left_shoulder[0],
        keypoint.left_hip[1],
      ]),
      hipAngle: calcAngle(
        keypoint.left_shoulder,
        keypoint.left_knee,
        keypoint.left_hip,
      ),
      htov: 0,
      jumpDistance: 0,
      kneeAngle: calcAngle(
        keypoint.left_hip,
        keypoint.left_knee,
        keypoint.left_ankle,
      ),
      passTime: 0,
      swimmingSpeed: null,
      time: Number((idx * 0.033333333).toFixed(2)),
      trunkAngle: calcAngle(keypoint.left_shoulder, keypoint.left_hip, [
        keypoint.left_shoulder[0],
        keypoint.left_hip[1],
      ]),
    };
  });

export const runningAnalysis = (keypoints: Keypoint[]) =>
  keypoints.map((keypoint, idx) => {
    // armSwingAngle: '腕振り角度'
    keypoint.left_shoulder;
    keypoint.left_elbow;
    keypoint.left_wrist;

    // cogSpeed: '重心速度',

    // hipHeight: '腰の高さ',
    keypoint.left_hip;

    // legRoll: '足の巻き具合',
    keypoint.left_hip;
    keypoint.left_knee;
    keypoint.left_heel;

    // pitch: 'ピッチ',
    keypoint.left_hip;
    keypoint.left_knee;
    keypoint.left_ankle;
    keypoint.left_foot_index;
    keypoint.left_heel;

    // stride: 'ストライド',
    keypoint.left_foot_index;
    keypoint.right_foot_index;

    // toeDrop: 'つま先の下がり',
    keypoint.left_foot_index;
    keypoint.left_heel;
    keypoint.left_ankle;

    return {
      ankleAngle: calcAngle(keypoint.left_shoulder, keypoint.left_hip, [
        keypoint.left_shoulder[0],
        keypoint.left_hip[1],
      ]),
      armSwingAngle: 0,
      cogSpeed: 0,
      hipAngle: calcAngle(
        keypoint.left_shoulder,
        keypoint.left_knee,
        keypoint.left_hip,
      ),
      hipHeight: 0,
      kneeAngle: calcAngle(
        keypoint.left_hip,
        keypoint.left_knee,
        keypoint.left_ankle,
      ),
      legRoll: 0,
      pitch: 0,
      stride: 0,
      time: Number((idx * 0.033333333).toFixed(2)),
      toeDrop: null,
      trunkAngle: calcAngle(keypoint.left_shoulder, keypoint.left_hip, [
        keypoint.left_shoulder[0],
        keypoint.left_hip[1],
      ]),
    };
  });
