/* キーポイントX座標 */
export const BODY_PARTS_XCOOR = {
  left_ankle_x: 'LAnkleX',
  left_ear_x: 'LEarX',
  left_elbow_x: 'LElbowX',
  left_foot_index_x: 'LFootIndexX',
  left_heel_x: 'LHeelX',
  left_hip_x: 'LHipX',
  left_index_x: 'LIndexX',
  left_knee_x: 'LKneeX',
  left_shoulder_x: 'LShoulderX',
  left_wrist_x: 'LWristX',
  right_ankle_x: 'RAnkleX',
  right_ear_x: 'REarX',
  right_elbow_x: 'RElbowX',
  right_foot_index_x: 'RFootIndexX',
  right_heel_x: 'RHeelX',
  right_hip_x: 'RHipX',
  right_index_x: 'RIndexX',
  right_knee_x: 'RKneeX',
  right_shoulder_x: 'RShoulderX',
  right_wrist_x: 'RWristX',
  // left_ankle_x: '左足首X',
  // left_ear_x: '左耳X',
  // left_elbow_x: '左肘X',
  // left_foot_index_x: '左つま先X',
  // left_heel_x: '左踵X',
  // left_hip_x: '左臀部X',
  // left_index_x: '左手先X',
  // left_knee_x: '左膝X',
  // left_shoulder_x: '左肩X',
  // left_wrist_x: '左手首X',
  // right_ankle_x: '右足首X',
  // right_ear_x: '右耳X',
  // right_elbow_x: '右肘X',
  // right_foot_index_x: '右つま先X',
  // right_heel_x: '右踵X',
  // right_hip_x: '右臀部X',
  // right_index_x: '右手先X',
  // right_knee_x: '右膝X',
  // right_shoulder_x: '右肩X',
  // right_wrist_x: '右手首X',
} as const;

/* キーポイントY座標 */
export const BODY_PARTS_YCOOR = {
  left_ankle_y: 'LAnkleY',
  left_ear_y: 'LEarY',
  left_elbow_y: 'LElbowY',
  left_foot_index_y: 'LFootIndexY',
  left_heel_y: 'LHeelY',
  left_hip_y: 'LHipY',
  left_index_y: 'LIndexY',
  left_knee_y: 'LKneeY',
  left_shoulder_y: 'LShoulderY',
  left_wrist_y: 'LWristY',
  right_ankle_y: 'RAnkleY',
  right_ear_y: 'REarY',
  right_elbow_y: 'RElbowY',
  right_foot_index_y: 'RFootIndexY',
  right_heel_y: 'RHeelY',
  right_hip_y: 'RHipY',
  right_index_y: 'RIndexY',
  right_knee_y: 'RKneeY',
  right_shoulder_y: 'RShoulderY',
  right_wrist_y: 'RWristY',
  // left_ankle_y: '左足首Y',
  // left_ear_y: '左耳Y',
  // left_elbow_y: '左肘Y',
  // left_foot_index_y: '左つま先Y',
  // left_heel_y: '左踵Y',
  // left_hip_y: '左臀部Y',
  // left_index_y: '左手先Y',
  // left_knee_y: '左膝Y',
  // left_shoulder_y: '左肩Y',
  // left_wrist_y: '左手首Y',
  // right_ankle_y: '右足首Y',
  // right_ear_y: '右耳Y',
  // right_elbow_y: '右肘Y',
  // right_foot_index_y: '右つま先Y',
  // right_heel_y: '右踵Y',
  // right_hip_y: '右臀部Y',
  // right_index_y: '右手先Y',
  // right_knee_y: '右膝Y',
  // right_shoulder_y: '右肩Y',
  // right_wrist_y: '右手首Y',
  // left_ankle_y: '左足首Y',
} as const;

/* キーポイント座標 */
export const BODY_PARTS_COOR = {
  ...BODY_PARTS_XCOOR,
  ...BODY_PARTS_YCOOR,
} as const;
