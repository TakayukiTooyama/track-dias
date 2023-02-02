import type { Keypoint } from '@/type/analysis';

/* 動画のメタ情報 */
export type VideoMetadata = {
  duration: number;
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

export type VideoInfo = {
  name: string;
  createdAt: Date;
  duration: number;
  file: File;
  keypoints: Keypoint[];
  lastAccess: Date;
  size: number;
  updatedAt: Date;
  videoHeight: number;
  videoWidth: number;
};

/* 動画のサムネイル */
export type Thumbnail = {
  name: string;
  thumbnail: string;
};

/* 解析する動画の情報 */
export type InputVideoInfo = VideoMetadata & VideoFileInfo;
export type VideoDisplayInfo = InputVideoInfo & Thumbnail;
