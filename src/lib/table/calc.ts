import type { Keypoint } from '@/type';

export const dolphinAnalysis = (keypoints: Keypoint[]) => {
  keypoints.map((keypoint) => {
    // ankleJoint: '足関節角度'
    keypoint.left_knee;
    keypoint.left_ankle;
    keypoint.left_foot_index;

    // hipJoint: '股関節角度'
    keypoint.left_shoulder;
    keypoint.left_knee;
    keypoint.left_hip;

    // kickFrequency: 'キック頻度'
    keypoint.left_knee;
    keypoint.left_ankle;
    keypoint.left_foot_index;

    // kickWidth: '蹴り幅'
    keypoint.left_knee;
    keypoint.left_ankle;
    keypoint.left_foot_index;

    // kneeJoint: '膝関節角度',
    keypoint.left_hip;
    keypoint.left_knee;
    keypoint.left_ankle;

    //swimmingSpeed: '泳速度',

    //trunkAngle: '体幹角度',
    keypoint.left_shoulder;
    keypoint.left_hip;

    return keypoint.left_ankle;
  });
};

export const divingAnalysis = (keypoints: Keypoint[]) => {
  keypoints.map((keypoint) => {
    // ankleJoint: '足関節角度'
    keypoint.left_knee;
    keypoint.left_ankle;
    keypoint.left_foot_index;

    // hipJoint: '股関節角度'
    keypoint.left_shoulder;
    keypoint.left_knee;
    keypoint.left_hip;

    // kneeJoint: '膝関節角度',
    keypoint.left_hip;
    keypoint.left_knee;
    keypoint.left_ankle;

    //trunkAngle: '体幹角度',
    keypoint.left_shoulder;
    keypoint.left_hip;

    // jumpDistance: '飛距離'
    keypoint.left_index;

    // passTime: '5m通過時間'
    // reactionTime: 'リアクションタイム'
    // htov: 'HTOV（離台時水平速度）'
    // verticalVelocity: '鉛直重心速度'

    return keypoint.left_ankle;
  });
};

export const runningAnalysis = (keypoints: Keypoint[]) => {
  keypoints.map((keypoint) => {
    // ankleJoint: '足関節角度'
    keypoint.left_knee;
    keypoint.left_ankle;
    keypoint.left_foot_index;

    // hipJoint: '股関節角度'
    keypoint.left_shoulder;
    keypoint.left_knee;
    keypoint.left_hip;

    // armSwingAngle: '腕振り角度'
    keypoint.left_shoulder;
    keypoint.left_elbow;
    keypoint.left_wrist;

    // cogSpeed: '重心速度',

    // kneeJoint: '膝関節角度',
    keypoint.left_hip;
    keypoint.left_knee;
    keypoint.left_ankle;

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

    //trunkAngle: '体幹角度',
    keypoint.left_shoulder;
    keypoint.left_hip;

    return keypoint.left_ankle;
  });
};
