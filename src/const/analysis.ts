/* 全キーポイント */
export const BODY_PARTS = {
  left_ankle: '左足首',
  left_ear: '左耳',
  left_elbow: '左肘',
  left_foot_index: '左つま先',
  left_heel: '左踵',
  left_hip: '左臀部',
  left_index: '左手先',
  left_knee: '左膝',
  left_shoulder: '左肩',
  left_wrist: '左手首',
  right_ankle: '右足首',
  right_ear: '右耳',
  right_elbow: '右肘',
  right_foot_index: '右つま先',
  right_heel: '右踵',
  right_hip: '右臀部',
  right_index: '右手先',
  right_knee: '右膝',
  right_shoulder: '右肩',
  right_wrist: '右手首',
} as const;

/* ドルフィンキック */
export const DOLPHIN_ANALYSIS = {
  ankleAngle: '足関節角度',
  hipAngle: '股関節角度',
  kickFrequency: 'キック頻度',
  kickWidth: '蹴り幅',
  kneeAngle: '膝関節角度',
  swimmingSpeed: '泳速度',
  trunkAngle: '体幹角度',
} as const;

/* 飛び込み動作 */
export const DIVING_ANALYSIS = {
  hipAngle: '股関節角度',
  htov: 'HTOV（離台時水平速度）',
  jumpDistance: '飛距離',
  kneeAngle: '膝関節角度',
  passTime: '5m通過時間',
  reactionTime: 'リアクションタイム',
  trunkAngle: '体幹角度',
  verticalVelocity: '鉛直重心速度',
} as const;

/* 走動作 */
export const RUNNING_ANALYSIS = {
  armSwingAngle: '腕振り角度',
  cogSpeed: '重心速度',
  hipAngle: '股関節角度',
  hipHeight: '腰の高さ',
  kneeAngle: '膝関節角度',
  legRoll: '足の巻き具合',
  pitch: 'ピッチ',
  stride: 'ストライド',
  thighHeight: '腿の高さ',
  toeDrop: 'つま先の下がり',
  trunkAngle: '体幹角度',
} as const;

/* キャリブレーションマーカー */
export const CALIBRATION_MARKER = {
  leftDown: '左下マーカー',
  leftUp: '左上マーカー',
  rightDown: '右下マーカー',
  rightUp: '右上マーカー',
};
