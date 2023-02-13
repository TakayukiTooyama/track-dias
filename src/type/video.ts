import type { Keypoint } from '@/type/analysis';

/* 動画のメタ情報 */
export type VideoMetadata = {
  createdAt: Date;
  duration: number;
  lastAccess: Date;
  totalFrame: number;
  updatedAt: Date;
  videoHeight: number;
  videoWidth: number;
};

/* 動画ファイル情報 */
export type VideoFileInfo = {
  name: string;
  file: File;
  size: number;
  type: string;
};

export type VideoInfo = { keypoints: Keypoint[] } & VideoMetadata &
  VideoFileInfo;
